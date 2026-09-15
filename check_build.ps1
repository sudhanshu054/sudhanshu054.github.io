$built = Get-Content "D:\Portfolio\dist\assets\index-C2rR0o0u.js" -Raw
Write-Host "Has customer: $($built.Contains('customer'))"
Write-Host "Has 12fQGuEj: $($built.Contains('12fQGuEj'))"
Write-Host "Has TEST: $($built.Contains('TEST'))"
Write-Host "Length: $($built.Length)"
Write-Host "First 200 chars: $($built[0..200] -join '')"
