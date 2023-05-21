var input = document.getElementById('input');
 var result = document.getElementById('result');
 var inputType = document.getElementById('inputType'); 
 var resultType = document.getElementById('resultType');
 var inputTypeValue, resultTypeValue;


 input.addEventListener("keyup",myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);
 
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
        
        result.value = Number(input.value)*0.001;
        }else if(inputTypeValue === "meter" && resultTypeValue==="Centimeter"){
    
        result.value = Number(input.value) * 100;
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="millimeter"){
        
            result.value = Number(input.value) *1000;
            }
        else if(inputTypeValue === "meter" && resultTypeValue==="feet"){
        
            result.value = Number(input.value) * 3.28084;
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="inches"){
        
            result.value = Number(input.value) * 39.3701;
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="miles"){
        
            result.value = Number(input.value) * 0.0006213689;
        }
            else if(inputTypeValue === "meter" && resultTypeValue==="meter")
        { 
        result.value = input.value
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="celsius")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="fahrenheit")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="kelvin")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "meter" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "kilometer" && resultTypeValue ==="meter")
        {
        
         result.value = Number(input.value) * 1000;
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="Centimeter")
        {
        
        result.value = Number(input.value)*100000;
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="millimeter")
        {
        
        result.value = Number(input.value)*1000000;
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="feet")
        {
        
        result.value = Number(input.value)*3280.84;
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="inches")
        {
        
        result.value = Number(input.value)*39370.1;
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="miles")
        {
        
        result.value = Number(input.value)*0.6213688756;
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer")
        {
       
        result.value = input.value
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="celsius")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="fahrenheit")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="kelvin")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilometer" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "Centimeter" && resultTypeValue- "meter")
        {
        
         result.value = Number(input.value) * 0.01;
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="kilometer")
        {
        
        result.value = Number(input.value)*0.00001;
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="millimeter")
        {
        
        result.value = Number(input.value)*10;
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="feet")
        {
        
        result.value = Number(input.value)*0.0328084;
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="inches")
        {
        
        result.value = Number(input.value)*0.393701;
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="miles")
        {
        
        result.value = Number(input.value)*0.0000062137;
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter")
        {
        
        result.value = input.value
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="celsius")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="fahrenheit")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="kelvin")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "Centimeter" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "feet" && resultTypeValue ==="meter")
        {
        
         result.value = Number(input.value) * 0.3048;
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="Centimeter")
        {
        
        result.value = Number(input.value)*30.48;
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="millimeter")
        {
        
        result.value = Number(input.value)*304.8;
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="kilometer")
        {
        
        result.value = Number(input.value)*0.0003048;
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="inches")
        {
        
        result.value = Number(input.value)*12;
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="miles")
        {
        
        result.value = Number(input.value)*0.0001893932;
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="feet")
        {
        
        result.value = input.value
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="celsius")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="fahrenheit")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="kelvin")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "feet" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "inches" && resultTypeValue ==="meter")
        {
        
         result.value = Number(input.value) * 0.0254;
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="Centimeter")
        {
        
        result.value = Number(input.value)*2.54;
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="millimeter")
        {
        
        result.value = Number(input.value)*25.4;
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="kilometer")
        {
        
        result.value = Number(input.value)*2.54e-5;
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="feet")
        {
        
        result.value = Number(input.value)*0.0833333;
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="miles")
        {
        
        result.value = Number(input.value)*0.0000157828;
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="inches")
        {
        
        result.value = input.value
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="celsius")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="fahrenheit")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="kelvin")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "inches" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "miles" && resultTypeValue ==="meter")
        {
        
         result.value = Number(input.value) * 1609.35;
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="Centimeter")
        {
        
        result.value = Number(input.value)*160935;
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="millimeter")
        {
        
        result.value = Number(input.value)*1609350;
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="kilometer")
        {
        
        result.value = Number(input.value)*1.60935;
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="feet")
        {
        
        result.value = Number(input.value)*5280.019685;
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="inches")
        {
        
        result.value = Number(input.value)*63360.23622;
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="miles")
        {
        
        result.value = input.value
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="celsius")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="fahrenheit")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="kelvin")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "miles" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "millimeter" && resultTypeValue ==="meter")
        {
        
         result.value = Number(input.value) * 0.001;
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="Centimeter")
        {
        
        result.value = Number(input.value)*0.1;
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="kilometer")
        {
        
        result.value = Number(input.value)*0.000001;
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="feet")
        {
        
        result.value = Number(input.value)*0.0032808399;
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="inches")
        {
        
        result.value = Number(input.value)*0.0393700787;
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="miles")
        {
        
        result.value =  Number(input.value)*6.213688756E-7;
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="celsius")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="fahrenheit")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="kelvin")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === ",illimeter" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "millimeter" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "celsius" && resultTypeValue ==="kelvin")
        {
        
         result.value = Number(input.value) * 274.15;
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="fahrenheit")
        {
        
        result.value = Number(input.value)*33.8;
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="celsius")
        {
        
       result.value = input.value
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "celsius" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "celcius" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "celcius" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "celcius" && resultTypeValue==="second")
        { 
        result.value = null
        }
        

        if(inputTypeValue === "kelvin" && resultTypeValue ==="celsius")
        {
        
         result.value = Number(input.value) * (-272.15);
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="fahrenheit")
        {
        
        result.value = Number(input.value)* (-457.87);
        }
        
        else if(inputTypeValue === "kelvin" && resultTypeValue==="kelvin")
        {
        
       result.value = input.value
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kelvin" && resultTypeValue==="second")
        { 
        result.value = null
        }

        if(inputTypeValue === "fahrenheit" && resultTypeValue ==="celsius")
        {
        
         result.value = Number(input.value) * (-17.222222222);
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="kelvin")
        {
        
        result.value = Number(input.value)*255.92777778;
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="fahrenheit")
        {
        
       result.value = input.value
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="kilogram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="gram")
        { 
        result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="pound")
        { 
        result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="carrot")
        { 
        result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "fahrenheit" && resultTypeValue==="second")
        { 
        result.value = null
        }

        
        if(inputTypeValue === "kilogram" && resultTypeValue ==="kilogram")
        {
            result.value = input.value
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="gram")
        {
        
        result.value = Number(input.value)*1000;
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="pound")
        {
        
       result.value = Number(input.value)*2.2046244202;
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="carrot")
        {
            result.value = Number(input.value)*5000;
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="celcius")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="kelvin")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="fahrenheit")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "kilogram" && resultTypeValue==="second")
        { 
        result.value = null
        }


        if(inputTypeValue === "gram" && resultTypeValue ==="gram")
        {
            result.value = input.value
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="kilogram")
        {
        
        result.value = Number(input.value)*0.001;
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="pound")
        {
        
       result.value = Number(input.value)*0.0022046244;
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="carrot")
        {
            result.value = Number(input.value)*5;
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="celcius")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="kelvin")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="fahrenheit")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "gram" && resultTypeValue==="second")
        { 
        result.value = null
        }


        if(inputTypeValue === "pound" && resultTypeValue ==="pound")
        {
            result.value = input.value
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="kilogram")
        {
        
        result.value = Number(input.value)*0.453592;
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="gram")
        {
        
       result.value = Number(input.value)*453.592;
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="carrot")
        {
            result.value = Number(input.value)*2267.96;
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="celcius")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="kelvin")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="fahrenheit")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "pound" && resultTypeValue==="second")
        { 
        result.value = null
        }

        
        if(inputTypeValue === "carrot" && resultTypeValue ==="carrot")
        {
            result.value = input.value
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="kilogram")
        {
        
        result.value = Number(input.value)*0.0002;
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="gram")
        {
        
       result.value = Number(input.value)*0.2;
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="pound")
        {
            result.value = Number(input.value)*0.0004409249;
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="celcius")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="kelvin")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="fahrenheit")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="minute")
        { 
        result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="hour")
        { 
        result.value = null
        }
        else if(inputTypeValue === "carrot" && resultTypeValue==="second")
        { 
        result.value = null
        }


        if(inputTypeValue === "second" && resultTypeValue ==="second")
        {
            result.value = input.value
        }
        else if(inputTypeValue === "second" && resultTypeValue ==="minute")
        {
            result.value = Number(input.value)*0.0166666667;
        }
        else if(inputTypeValue === "second" && resultTypeValue ==="hour")
        {
            result.value = Number(input.value)*0.002777778;
        }
        else if(inputTypeValue === "second" && resultTypeValue ==="carrot")
        {
            result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="kilogram")
        {
            result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="gram")
        {
        
        result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="pound")
        {
            result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="celcius")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="kelvin")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="fahrenheit")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "second" && resultTypeValue==="miles")
        {
        
       result.value = null
        }

        if(inputTypeValue === "hour" && resultTypeValue ==="hour")
        {
            result.value = input.value
        }
        else if(inputTypeValue === "hour" && resultTypeValue ==="minute")
        {
            result.value = Number(input.value)*60;
        }
        else if(inputTypeValue === "hour" && resultTypeValue ==="second")
        {
            result.value = Number(input.value)*3600;
        }
        else if(inputTypeValue === "hour" && resultTypeValue ==="carrot")
        {
            result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="kilogram")
        {
            result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="gram")
        {
        
        result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="pound")
        {
            result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="celcius")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="kelvin")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="fahrenheit")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "hour" && resultTypeValue==="miles")
        {
        
       result.value = null
        }

        if(inputTypeValue === "minute" && resultTypeValue ==="minute")
        {
            result.value = input.value
        }
        else if(inputTypeValue === "minute" && resultTypeValue ==="hour")
        {
            result.value = Number(input.value)*0.0166666667;
        }
        else if(inputTypeValue === "minute" && resultTypeValue ==="second")
        {
            result.value = Number(input.value)*60;
        }
        else if(inputTypeValue === "minute" && resultTypeValue ==="carrot")
        {
            result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="kilogram")
        {
            result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="gram")
        {
        
        result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="pound")
        {
            result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="celcius")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="kelvin")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="fahrenheit")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="meter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="Centimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="millimeter")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="kilometer")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="inches")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="feet")
        {
        
       result.value = null
        }
        else if(inputTypeValue === "minute" && resultTypeValue==="miles")
        {
        
       result.value = null
        }
    
}