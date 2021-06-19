// items.forEach((item) => {
//     if (/[0-9]/.test(item.textContent[0])) {
//         console.log(item.textContent);
//     }
// });

const examples = [
    {
        fact: "65% of black children live in a single-parent home compared to 24% of white children",
        source: "Kids Count Data Center",
        link: "http://www.example.com",
    },
    {
        fact: "Black preschoolers are 3.6X more likely to be suspended than white preschoolers",
        source: "US Department of Education Office for Civil Rights",
        link: "http://www.example.com",
    },
    {
        fact: "Black students are 3.2X more likely to be suspended for infractions at school",
        source: "US Department of Education Office for Civil Rights",
        link: "http://www.example.com",
    },
    {
        fact: "Predominantly black school districts receive far less financial funding than white school districts",
        source: "ED Build",
        link: "http://www.example.com",
    },
    {
        fact: "Black students/children have less access to computers and the internet",
        source: "National Center for Education Statistics",
        link: "http://www.example.com",
    },
    {
        fact: "Black high school students are less likely to receive a high school diploma",
        source: "National Center for Education Statistics",
        link: "http://www.example.com",
    },
    {
        fact: "A higher percentage of black Americans with a GPA of 3.5 or higher attend community colleges vs top-tier selective institutions",
        source: "Georgetown University",
        link: "http://www.example.com",
    },
    {
        fact: "Nearly 46% of black college students finish a four-year degree within six years compared to 72% of white college students",
        source: "National Student Clearinghouse",
        link: "http://www.example.com",
    },
    {
        fact: "Black college students are more likely to go into debt to pay for college",
        source: "US Department of Education",
        link: "http://www.example.com",
    },
    {
        fact: "The average Black college graduate leaves a public four-year institution with $111486 in debt; 55% more debt than the average white college student.",
        source: "American Council on Education",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans with college degrees are twice as likely to be unemployed",
        source: "The Atlantic",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans with 'white' names receive 50% more callbacks for job applications",
        source: "National Bureau of Economic Research",
        link: "http://www.example.com",
    },
    {
        fact: "The median wealth of black college graduates is $23400 vs $180500 in white college graduates",
        source: "Economic Policy Institute",
        link: "http://www.example.com",
    },
    {
        fact: "White researches are twice as likely to win research grants than black researchers",
        source: "National Institute of Health",
        link: "http://www.example.com",
    },
    {
        fact: "27% of black Americans live in poverty compared to 9.9% of whites",
        source: "Economic Policy Institute 2018",
        link: "http://www.example.com",
    },
    {
        fact: "Median overall wealth for black families is $11030 vs $134230 for white families",
        source: "Economic Policy Institute",
        link: "http://www.example.com",
    },
    {
        fact: "The median wealth for a single black woman is $100 vs $41000 for single white women",
        source: "Insight Center for Community Economic Development",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans represent 40% of the homeless population despite only being 13% of the general population",
        source: "National Alliance to End Homelessness",
        link: "http://www.example.com",
    },
    {
        fact: "Black homebuyers are shown 17% fewer homes and apartments than white buyers",
        source: "US Department of Housing and Urban Development",
        link: "http://www.example.com",
    },
    {
        fact: "Black homebuyers are more likely to be denied an appointment with a real estate agent",
        source: "US Department of Housing and Urban Development",
        link: "http://www.example.com",
    },
    {
        fact: "Housing lenders have disproportionately steered Black Americans to subprime housing loans even when they were qualified for prime loans.",
        source: "Suffolk University Law Review",
        link: "http://www.example.com",
    },
    {
        fact: "Only 43% of black householders own their home vs 72% of white householders",
        source: "PEW Research Center",
        link: "http://www.example.com",
    },
    {
        fact: "Comparable homes in black neighborhoods are worth 23% less compared to white neighborhoods",
        source: "Brookings",
        link: "http://www.example.com",
    },
    {
        fact: "Statistically Black Americans receive harsher punishments for the same crimes.",
        source: "University of Michigan Law Center",
        link: "http://www.example.com",
    },
    {
        fact: "Black children in the criminal justice system are 18x more likely to be sentenced as adults compared to white children.",
        source: "Journal of Personality and Social Psychology 2014",
        link: "http://www.example.com",
    },
    {
        fact: "Prosecutors are 1.75x more likely to file charges on black American's that require mandatory minimums.",
        source: "University of Michigan Law Center",
        link: "http://www.example.com",
    },
    {
        fact: "Black drivers are 20% more likely to be pulled over than white drivers.",
        source: "Nature Human Behaviour (Study by Stanford University)",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are searched more than white Americans",
        source: "Stanford",
        link: "http://www.example.com",
    },
    {
        fact: "Police statistically require less suspicion to search black drivers",
        source: "Stanford Threshold Test",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans represent 40% of the total prison population despite representing 13% of the general population",
        source: "United States Census 2010",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are 3.6x more likely to be arrested for marijuana usage despite virtually equal usage rates",
        source: "ACLU",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are twice as likely to be incarcerated while awaiting trial & pay money for bail",
        source: "Bureau of Justice Statistics",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans pay higher bail than white Americans convicted of the same crime",
        source: "New York University Journal of Legislation and Public Policy",
        link: "http://www.example.com",
    },
    {
        fact: "Facial recognition software is more likely to generate false criminal positives for Black Americans",
        source: "ACLU",
        link: "http://www.example.com",
    },
    {
        fact: "As a result of increased felony incarceration 7.4% of black American men are disenfranchised (unable to vote).",
        source: "The Sentencing Project",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans in urban and suburban areas must travel further to find grocery stores and fresh food making it more difficult to maintain a healthy diet.",
        source: "US National Library of Medicine",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are over two times more likely to be 'Food Insecure' meaning they have limited or uncertain access to adequate food.",
        source: "Family Community Health",
        link: "http://www.example.com",
    },
    {
        fact: "Fast food chains target black neighborhoods contributing to increases in obesity rates",
        source: "American Journal of Preventive Medicine",
        link: "http://www.example.com",
    },
    {
        fact: "As a result of this diet Black Americans are 50% more likely to be diagnosed with a stroke and 40% more likely to die from a stroke",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are also 60% more likely to be diagnosed with diabetes",
        source: "Center for Disease Control",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are over twice as likely to die from diabetes",
        source: "Center for Disease Control",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans have far less access to local public parks. In Los Angeles white Americans have 31.8 acres of local parkland per 1000 residents whereas Black Americans have 1.7 acres of parkland per 1000 residents.",
        source: "National Parks and Recreation Association",
        link: "http://www.example.com",
    },
    {
        fact: "People with 'Black-American' names are 16% less likely to be approved for AirBNB rentals",
        source: "American Economic Journal",
        link: "http://www.example.com",
    },
    {
        fact: "Uber riders with 'African-American' sounding names are 3x more likely to have their ride canceled.",
        source: "National Bureau of Economic Research",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans on average wait longer for Uber and Lyft rides",
        source: "National Bureau of Economic Research",
        link: "http://www.example.com",
    },
    {
        fact: "People are less likely to stop for black Americans at a crosswalk",
        source: "National institute for Transportation and Communities",
        link: "http://www.example.com",
    },
    {
        fact: "Black children are 2.2x more likely to be exposed to lead before being born largely in part to lead exposure in black American women.",
        source: "US Library of Medicine",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are twice as likely to die in infancy",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "Black American mothers are less likely to receive prenatal care",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are less likely to survive a battle with cancer",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are less likely to receive immunizations for diseases like Hepatitis Influenza and Pneumonia",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are less likely to receive organ transplants",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are more likely to be exposed to harmful respiratory pollutants like diesel fumes",
        source: "Science Daily (Study by Ohio State University)",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are 60% more likely to be diagnosed with asthma",
        source: "CDC",
        link: "http://www.example.com",
    },
    {
        fact: "Black American adults are 2.8x more likely to die of asthma",
        source: "CDC",
        link: "http://www.example.com",
    },
    {
        fact: "Black American children are 7.1x more likely to die of asthma",
        source: "CDC",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are 50% more likely to be diagnosed with high blood pressure",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are 46% less likely to be offered employer-sponsored health insurance",
        source: "Kaiser Family Foundation",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans experience higher depression rates",
        source: "National Institute of Health",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are less likely to receive mental health services",
        source: "Substance Abuse and Mental Health Services Administration",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are less likely to receive treatment for depression",
        source: "Substance Abuse and Mental Health Services Administration",
        link: "http://www.example.com",
    },
    {
        fact: "Black Americans are twice as likely than whites to be diagnosed with schizophrenia.",
        source: "American Psychological Association",
        link: "http://www.example.com",
    },
    {
        fact: "Black American teenagers are more likely to attempt suicide.",
        source: "US Department of Health and Human Services",
        link: "http://www.example.com",
    },
    {
        fact: "On average black Americans live shorter lives than white Americans.",
        source: "CDC",
        link: "http://www.example.com",
    },
];

console.log(examples);
const nextButton = document.querySelector(".button_next");
const buttonLink = document.querySelector(".button-link");
const factElement = document.querySelector(".fact");
const sourceElement = document.querySelector(".source");

function renderFact() {
    const factNumber = Math.floor(Math.random() * examples.length);
    const fact = examples[factNumber];
    factElement.textContent = fact.fact;
    sourceElement.textContent = fact.source;
    sourceElement.href = fact.link;
    buttonLink.href = fact.link;
    console.log(fact);
}

renderFact();

nextButton.addEventListener("click", renderFact);
