/**
 * Export data to CSV file
 */
export const exportToCSV = (data: any[], filename: string) => {
  if (!data || data.length === 0) {
    alert('Tidak ada data untuk di-export')
    return
  }

  // Get headers from first object
  const headers = Object.keys(data[0])
  
  // Convert data to CSV format
  const csvContent = [
    // Header row
    headers.join(','),
    // Data rows
    ...data.map(row => 
      headers.map(header => {
        const value = row[header]
        // Handle values with commas, quotes, or newlines
        if (value === null || value === undefined) return ''
        const stringValue = String(value)
        if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
          return `"${stringValue.replace(/"/g, '""')}"`
        }
        return stringValue
      }).join(',')
    )
  ].join('\n')

  // Create blob and download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  
  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`)
  link.style.visibility = 'hidden'
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Export to Excel (XLSX format using HTML table method)
 */
export const exportToExcel = (data: any[], filename: string, sheetName: string = 'Sheet1') => {
  if (!data || data.length === 0) {
    alert('Tidak ada data untuk di-export')
    return
  }

  // Get headers
  const headers = Object.keys(data[0])
  
  // Build HTML table
  let html = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">'
  html += '<head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
  html += `<x:Name>${sheetName}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>`
  html += '</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>'
  html += '<table border="1"><thead><tr>'
  
  // Add headers
  headers.forEach(header => {
    html += `<th>${header}</th>`
  })
  html += '</tr></thead><tbody>'
  
  // Add data rows
  data.forEach(row => {
    html += '<tr>'
    headers.forEach(header => {
      const value = row[header]
      html += `<td>${value !== null && value !== undefined ? value : ''}</td>`
    })
    html += '</tr>'
  })
  
  html += '</tbody></table></body></html>'
  
  // Create blob and download
  const blob = new Blob([html], { type: 'application/vnd.ms-excel' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  
  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.xls`)
  link.style.visibility = 'hidden'
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Format data for export (flatten nested objects, format dates, etc.)
 */
export const formatDataForExport = (data: any[], keysMapping?: Record<string, string>) => {
  return data.map(item => {
    const formatted: any = {}
    
    Object.keys(item).forEach(key => {
      const newKey = keysMapping?.[key] || key
      const value = item[key]
      
      // Format dates
      if (value instanceof Date) {
        formatted[newKey] = value.toISOString().split('T')[0]
      }
      // Format arrays
      else if (Array.isArray(value)) {
        formatted[newKey] = value.join(', ')
      }
      // Format objects (stringify)
      else if (typeof value === 'object' && value !== null) {
        formatted[newKey] = JSON.stringify(value)
      }
      // Regular values
      else {
        formatted[newKey] = value
      }
    })
    
    return formatted
  })
}
