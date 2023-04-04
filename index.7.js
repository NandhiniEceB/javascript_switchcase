<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>JavaScript Switch Case Statement</title>
</head>
<body>
    <script>
    var d = new Date();
	
    switch(d.getDay()) {
        case 0:
            document.write("Sunday");
            break;
        case 1:
            document.write("Monday");
            break;
        case 2:
            document.write("Tuesday");
            break;
        case 3:
            document.write("Wednesday");
            break;
        case 4:
            document.write("Thursday");
            break;
        case 5:
            document.write("Friday");
            break;
        case 6:
            document.write("Saturday");
            break;   
        default:
            document.write("No information");
            break;
    }
    </script>
</body>
</html>