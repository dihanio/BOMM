-- ============================================
-- BOMM Database Schema for Supabase
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. PROFILES TABLE
-- Extended user information for all members
-- ============================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  university TEXT,
  major TEXT,
  year INTEGER,
  phone TEXT,
  role TEXT CHECK (role IN ('anggota', 'staff')) DEFAULT 'anggota',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;

-- Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone" 
  ON profiles FOR SELECT 
  USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

-- ============================================
-- 2. ACTIVITIES TABLE
-- All BOMM activities and events
-- ============================================
CREATE TABLE IF NOT EXISTS activities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT,
  date DATE NOT NULL,
  time TEXT,
  location TEXT NOT NULL,
  venue TEXT,
  category TEXT NOT NULL,
  status TEXT CHECK (status IN ('upcoming', 'past')) DEFAULT 'upcoming',
  participants INTEGER DEFAULT 0,
  max_participants INTEGER,
  image TEXT,
  contact_name TEXT,
  contact_phone TEXT,
  goals TEXT[],
  schedule JSONB,
  photos TEXT[],
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_activities_status ON activities(status);
CREATE INDEX IF NOT EXISTS idx_activities_date ON activities(date DESC);
CREATE INDEX IF NOT EXISTS idx_activities_category ON activities(category);
CREATE INDEX IF NOT EXISTS idx_activities_created_by ON activities(created_by);

-- Enable RLS
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Activities are viewable by everyone" ON activities;
DROP POLICY IF EXISTS "Staff can insert activities" ON activities;
DROP POLICY IF EXISTS "Staff can update activities" ON activities;
DROP POLICY IF EXISTS "Staff can delete activities" ON activities;

-- Policies for activities
CREATE POLICY "Activities are viewable by everyone" 
  ON activities FOR SELECT 
  USING (true);

CREATE POLICY "Staff can insert activities" 
  ON activities FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

CREATE POLICY "Staff can update activities" 
  ON activities FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

CREATE POLICY "Staff can delete activities" 
  ON activities FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

-- ============================================
-- 3. ACTIVITY REGISTRATIONS TABLE
-- Track member registrations for activities
-- ============================================
CREATE TABLE IF NOT EXISTS activity_registrations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  activity_id UUID REFERENCES activities(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  status TEXT CHECK (status IN ('registered', 'attended', 'cancelled')) DEFAULT 'registered',
  notes TEXT,
  registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(activity_id, user_id)
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_registrations_activity ON activity_registrations(activity_id);
CREATE INDEX IF NOT EXISTS idx_registrations_user ON activity_registrations(user_id);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON activity_registrations(status);

-- Enable RLS
ALTER TABLE activity_registrations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own registrations" ON activity_registrations;
DROP POLICY IF EXISTS "Authenticated users can register for activities" ON activity_registrations;
DROP POLICY IF EXISTS "Users can update their own registrations" ON activity_registrations;
DROP POLICY IF EXISTS "Users can cancel their own registrations" ON activity_registrations;

-- Policies for registrations
CREATE POLICY "Users can view their own registrations" 
  ON activity_registrations FOR SELECT 
  USING (auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

CREATE POLICY "Authenticated users can register for activities" 
  ON activity_registrations FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own registrations" 
  ON activity_registrations FOR UPDATE 
  USING (auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

CREATE POLICY "Users can cancel their own registrations" 
  ON activity_registrations FOR DELETE 
  USING (auth.uid() = user_id);

-- ============================================
-- 4. NEWS TABLE
-- BOMM news and announcements
-- ============================================
CREATE TABLE IF NOT EXISTS news (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content JSONB NOT NULL,
  image TEXT,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  read_time INTEGER DEFAULT 5,
  tags TEXT[],
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  views INTEGER DEFAULT 0,
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);
CREATE INDEX IF NOT EXISTS idx_news_featured ON news(featured);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(published);
CREATE INDEX IF NOT EXISTS idx_news_created_at ON news(created_at DESC);

-- Enable RLS
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Published news are viewable by everyone" ON news;
DROP POLICY IF EXISTS "Staff can insert news" ON news;
DROP POLICY IF EXISTS "Staff can update news" ON news;
DROP POLICY IF EXISTS "Staff can delete news" ON news;

-- Policies for news
CREATE POLICY "Published news are viewable by everyone" 
  ON news FOR SELECT 
  USING (published = true OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

CREATE POLICY "Staff can insert news" 
  ON news FOR INSERT 
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

CREATE POLICY "Staff can update news" 
  ON news FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

CREATE POLICY "Staff can delete news" 
  ON news FOR DELETE 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

-- ============================================
-- 5. FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
DROP TRIGGER IF EXISTS update_activities_updated_at ON activities;
DROP TRIGGER IF EXISTS update_news_updated_at ON news;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_activities_updated_at BEFORE UPDATE ON activities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to increment activity participants
CREATE OR REPLACE FUNCTION increment_activity_participants()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'registered' THEN
    UPDATE activities 
    SET participants = participants + 1 
    WHERE id = NEW.activity_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS increment_participants_on_registration ON activity_registrations;

CREATE TRIGGER increment_participants_on_registration 
  AFTER INSERT ON activity_registrations
  FOR EACH ROW EXECUTE FUNCTION increment_activity_participants();

-- Function to decrement activity participants
CREATE OR REPLACE FUNCTION decrement_activity_participants()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status = 'registered' AND (NEW.status = 'cancelled' OR TG_OP = 'DELETE') THEN
    UPDATE activities 
    SET participants = participants - 1 
    WHERE id = OLD.activity_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist
DROP TRIGGER IF EXISTS decrement_participants_on_cancel ON activity_registrations;
DROP TRIGGER IF EXISTS decrement_participants_on_delete ON activity_registrations;

CREATE TRIGGER decrement_participants_on_cancel 
  AFTER UPDATE ON activity_registrations
  FOR EACH ROW EXECUTE FUNCTION decrement_activity_participants();

CREATE TRIGGER decrement_participants_on_delete 
  AFTER DELETE ON activity_registrations
  FOR EACH ROW EXECUTE FUNCTION decrement_activity_participants();

-- ============================================
-- 6. STORAGE BUCKETS
-- ============================================

-- Create storage bucket for activity images
INSERT INTO storage.buckets (id, name, public)
VALUES ('activity-images', 'activity-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage bucket for news images
INSERT INTO storage.buckets (id, name, public)
VALUES ('news-images', 'news-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage bucket for user avatars
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Activity images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Staff can upload activity images" ON storage.objects;
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload their own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can update their own avatar" ON storage.objects;

-- Storage policies for activity images
CREATE POLICY "Activity images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'activity-images');

CREATE POLICY "Staff can upload activity images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'activity-images' AND
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'staff'
    )
  );

-- Storage policies for avatars
CREATE POLICY "Avatar images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can update their own avatar"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
