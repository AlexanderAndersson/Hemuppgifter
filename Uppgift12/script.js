window.onload = function () {
    fetch("http://forverkliga.se/JavaScript/api/simple.php?world=whatever")
.then(function(response) {
	return response.json();
})
.then(function(json) {
        let numOfPeople = 0;
        let numOfPeopleInEurope = 0;
        let numOfWomenInZimbabwe = 0;
        let lowestAmontOfPeople = 0;
        let pOceania = 0;
        let pAsia = 0;
        let pSouthAmerica = 0;
        let pAfrica = 0;
        let pNorthAmerica = 0;
        
        for(i = 0; i < json.length; i++) {
            numOfPeople += json[i].population;
            lowestAmontOfPeople = json[i].population;
            
            if(lowestAmontOfPeople >= json[i].population)
                lowestAmontOfPeople = json[i].name
            
            if(json[i].name == "Zimbabwe") {
                var population = 0;
                var procentOfWomen = 0;
                
                population += json[i].population
                procentOfWomen += json[i].pFemale
                
                numOfWomenInZimbabwe = population * procentOfWomen;           
            }
            
            if(json[i].continent == "Europe")
                numOfPeopleInEurope += json[i].population;
            /*
            if(json[i].continent == "Oceania")
                pOceania += json[i].population;
            
            if(json[i].continent == "Asia")
                pAsia += json[i].population;
            
            if(json[i].continent == "South America")
                pSouthAmerica += json[i].population;
            
            if(json[i].continent == "Africa")
                pAfrica += json[i].population;
            
            if(json[i].continent == "North America")
                pNorthAmerica += json[i].population;   
			*/			
        }     
        
	/*
    console.log("Europe" + "\n" + numOfPeopleInEurope + "\n\n" + "Oceania" + "\n" + pOceania + "\n\n" + "Asia" + "\n" + pAsia + "\n\n" + "South America" + "\n" + pSouthAmerica + "\n\n" + "Africa" + "\n" + pAfrica + "\n\n" + "North America" + "\n" + pNorthAmerica);        
    console.log("Svar: " + Math.max(numOfPeopleInEurope, pOceania, pAsia, pSouthAmerica, pAfrica, pNorthAmerica));
	*/
		
	document.getElementById("numOfPeople").innerHTML = "Svar: <b>" + numOfPeople + "</b> stycken ";
    document.getElementById("numOfPeopleInEuropa").innerHTML = "Svar: <b>" + numOfPeopleInEurope + "</b> stycken ";
    document.getElementById("numOfWomenInZimbabwe").innerHTML = "Svar: <b>" + numOfWomenInZimbabwe + "</b> stycken ";
    document.getElementById("landWithLeastPopulation").innerHTML = "Svar: <b>" + lowestAmontOfPeople + "</b>";
});
}
