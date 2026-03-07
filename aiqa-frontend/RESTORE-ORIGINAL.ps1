# AIQA Website - Restore Original Design
# Run this script to restore your original website design

Write-Host "AIQA Website - Restore Original" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""

$basePath = "c:\Users\SABARISH\Desktop\Intern\aiqa-frontend\src\pages"

Write-Host "Restoring original files from backups..." -ForegroundColor Yellow
Write-Host ""

$filesToRestore = @("Home.jsx", "Services.jsx", "Industries.jsx", "About.jsx", "Contact.jsx", "Platform.jsx")

foreach ($file in $filesToRestore) {
    $backup = Join-Path $basePath "$($file.Replace('.jsx', ''))-BACKUP.jsx"
    $destination = Join-Path $basePath $file
    
    if (Test-Path $backup) {
        Copy-Item -Path $backup -Destination $destination -Force
        Write-Host "  Restored $file" -ForegroundColor Green
    } else {
        Write-Host "  Backup for $file not found" -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "Original design restored!" -ForegroundColor Green
Write-Host ""
Write-Host "Refresh your browser to see the original design."
Write-Host ""
