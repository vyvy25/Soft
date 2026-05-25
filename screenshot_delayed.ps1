Start-Sleep -Seconds 900
Set-Location 'D:\My work - Vy\SoftFlex'
$result = node screenshot.js 2>&1
$result | Out-File -Encoding utf8 'D:\My work - Vy\SoftFlex\screenshot_round2_output.txt'
