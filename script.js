function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

window.addEventListener("load", showOverlay);


var proceed = document.getElementById("proceed");

proceed.addEventListener("click", closeOverlay);

function closeOverlay(){
    document.getElementById("overlay").style.display ="none";
}/* .js files add interaction to your website */

var quotesArray= "#funfacts";
quotesArray = [
  "Suicide is the second leading cause of death among young people aged 10 to 24 (Hedegaard, Curtin, & Warner, 2018) — and lesbian, gay, bisexual, transgender, queer, and questioning (LGBTQ) youth are at significantly increased risk.", //0
  "LGBTQ youth are more than four times as likely to attempt suicide than their peers (Johns et al., 2019; Johns et al., 2020).", //1
  "The Trevor Project estimates that more than 1.8 million LGBTQ youth (13-24) seriously consider suicide each year in the U.S. — and at least one attempts suicide every 45 seconds.", //2
  "The Trevor Project’s 2022 National Survey on LGBTQ Youth Mental Health found that 45% of LGBTQ youth seriously considered attempting suicide in the past year, including more than half of transgender and nonbinary youth.", //3
    "Transgender and nonbinary youth face elevated risk for depression, thoughts of suicide, and attempting suicide compared to youth who are cisgender and straight, including cisgender members of the LGBTQ community. ", //4
    "A 2020 peer-reviewed study by The Trevor Project’s researchers, published in the Journal of Adolescent Health, found that transgender and nonbinary youth were 2 to 2.5 times as likely to experience depressive symptoms, seriously consider suicide, and attempt suicide compared to their cisgender LGBQ peers.", //5
    "The Trevor Project’s 2022 national survey found that LGBTQ youth of color reported higher rates of attempting suicide than their white peers in the past year. Among the nearly 34,000 LGBTQ youth surveyed, 12% of white youth attempted suicide compared to 21% of Native/Indigenous youth, 20% of Middle Eastern/Northern African youth, 19% of Black youth, 17% of multiracial youth, 16% of Latinx youth, and 12% of Asian/Pacific Islander youth.",//6
    "In particular, Black transgender and nonbinary youth report disproportionate rates of suicide risk — with 59% seriously considering suicide and more than 1 in 4 (26%) attempting suicide in the past year.",//7
    "Research suggests that among LGBTQ youth, only one-third experience parental acceptance, with an additional one-third experiencing parental rejection, and the final one-third not disclosing their LGBTQ identity until they are adults (Katz-Wise et al., 2015).",//8
    "36% of LGBTQ youth reported that they have been physically threatened or harmed, and those who did attempted suicide at nearly triple the rate of those who did not in the past year. ",//9
    "73% of LGBTQ youth report that they had experienced discrimination based on their sexual orientation or gender identity at least once in their lifetime, and those who did attempted suicide at more than twice the rate of those who did not in the past year.",//10
    "According to The Trevor Project’s 2022 national survey of nearly 34,000 diverse LGBTQ youth ages 13-24 across the U.S., 17% reported being threatened with or subjected to conversion therapy, including more than 1 in 5 transgender and nonbinary youth and more than 1 in 10 cisgender youth.",//11
    "Having at least one accepting adult can reduce the risk of a suicide attempt among LGBTQ young people by 40 percent.",//12
    "The Trevor Project’s research has found that LGBTQ youth who found their school and home to be LGBTQ-affirming reported lower rates of attempting suicide.",//13
    "Data shows that bisexual youth, or those who have the capacity to form attraction and/or relationships to more than one gender, report higher rates of depressed mood, bullying, sexual assault, and physical harm. ",//14
    "LGBTQ youth who report the presence of trusted adults in their school have higher levels of self-esteem (Dessel et al., 2017)",//15
    "The presence of Gender and Sexualities Alliances (GSAs) has been found to significantly reduce the risk for depression and increase well-being among LGBTQ youth and young adults (Toomey et al., 2011).",//16
    " Younger members of the LGBTQ+ community struggle the most with mental health concerns of all the age groups.",//17
    "Fifty-nine percent of LGBTQ+ people feel that they have fewer employment opportunities and 50 percent believe they are paid less than non-LGBTQ+ people.[4]",//18
    "LGBTQ+ teens are six times more likely to experience symptoms of depression than non-LGBTQ+ identifying teens. [5]",//19
    "Approximately 8 percent of LGBTQ+ individuals and nearly 27 percent of transgender individuals report being denied needed health care outright. [9]",//19
    "Thirty-eight percent of transgender people say they have experienced slurs and 28 percent have experienced insensitive or offensive comments because of their gender identity or sexual orientation. [4]",//20
    "Twenty-two percent of transgender individuals say they have avoided doctors or health care our of concern they would be discriminated against. [4]",//21
]

var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", displayQuote);

function displayQuote() {
  var randNum = Math.random(); //number [0, 1)
  var scaledNum = randNum * quotesArray.length; //number [0, quotesArray.length)
  var index = Math.floor(scaledNum);
  
  var randomQuote = quotesArray[index];
  console.log(randomQuote);

  quote.innerHTML = randomQuote;
}
