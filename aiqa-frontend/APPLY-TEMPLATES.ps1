# AIQA Website Template Installer
# Run this script to apply the Dark Neural template set to your entire website

Write-Host "AIQA Website Template Installer" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

$basePath = "c:\Users\SABARISH\Desktop\Intern\aiqa-frontend\src\pages"

# Step 1: Backup current files
Write-Host "Step 1: Creating backups..." -ForegroundColor Yellow
$filesToBackup = @("Home.jsx", "Services.jsx", "Industries.jsx", "About.jsx", "Contact.jsx", "Platform.jsx")

foreach ($file in $filesToBackup) {
    $source = Join-Path $basePath $file
    $backup = Join-Path $basePath "$($file.Replace('.jsx', ''))-BACKUP.jsx"
    
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $backup -Force
        Write-Host "  Backed up $file" -ForegroundColor Green
    } else {
        Write-Host "  $file not found, skipping..." -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "Step 2: Applying Dark Neural template set..." -ForegroundColor Yellow

# Step 2: Apply templates
$templates = @{
    "Home-Template1-DarkNeural.jsx" = "Home.jsx"
    "Services-Template1-DarkNeural.jsx" = "Services.jsx"
    "Industries-Template1-DarkNeural.jsx" = "Industries.jsx"
    "About-Template1-DarkNeural.jsx" = "About.jsx"
    "Contact-Template1-DarkNeural.jsx" = "Contact.jsx"
    "Platform-Template1-DarkNeural.jsx" = "Platform.jsx"
}

foreach ($template in $templates.GetEnumerator()) {
    $source = Join-Path $basePath $template.Key
    $destination = Join-Path $basePath $template.Value
    
    if (Test-Path $source) {
        Copy-Item -Path $source -Destination $destination -Force
        Write-Host "  Applied $($template.Value)" -ForegroundColor Green
    } else {
        Write-Host "  Template $($template.Key) not found!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Template installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Make sure your dev server is running"
Write-Host "  2. Visit http://localhost:3001 to see the new design"
Write-Host "  3. To restore original design run RESTORE-ORIGINAL.ps1"
Write-Host ""
