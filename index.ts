// items.forEach((item) => {
//     if (/[0-9]/.test(item.textContent[0])) {
//         console.log(item.textContent);
//     }
// });

const examples = [
  {
    fact: '65% of black children live in a single-parent home compared to 24% of white children',
    source: 'Kids Count Data Center',
    link: 'https://datacenter.kidscount.org/data/tables/107-children-in-single-parent-families-by-race#detailed/1/any/false/37,871,870,573,869,36,868,867,133,38/10,11,9,12,1,185,13/432,431',
  },
  {
    fact: 'Black preschoolers are 3.6X more likely to be suspended than white preschoolers',
    source: 'US Department of Education Office for Civil Rights',
    link: 'https://ocrdata.ed.gov/Downloads/CRDC-School-Discipline-Snapshot.pdf',
  },
  {
    fact: 'Black students are 3.2X more likely to be suspended for infractions at school',
    source: 'US Department of Education Office for Civil Rights',
    link: 'https://ocrdata.ed.gov/Downloads/CRDC-School-Discipline-Snapshot.pdf',
  },
  {
    fact: 'Predominantly black school districts receive far less financial funding than white school districts',
    source: 'ED Build',
    link: 'https://edbuild.org/content/23-billion/full-report.pdf',
  },
  {
    fact: 'Black students/children have less access to computers and the internet',
    source: 'National Center for Education Statistics',
    link: 'https://nces.ed.gov/pubs2017/2017098/index.asp',
  },
  {
    fact: 'Black high school students are less likely to receive a high school diploma',
    source: 'National Center for Education Statistics',
    link: 'https://nces.ed.gov/programs/coe/indicator_coi.asp',
  },
  {
    fact: 'A higher percentage of black Americans with a GPA of 3.5 or higher attend community colleges vs top-tier selective institutions',
    source: 'Georgetown University',
    link: 'http://cew.georgetown.edu/wp-content/uploads/SeparateUnequal.FR_.pdf',
  },
  {
    fact: 'Only 46% of black college students finish a four-year degree within six years compared to 72% of white college students',
    source: 'National Student Clearinghouse',
    link: 'https://nscresearchcenter.org/wp-content/uploads/SignatureReport14_Final.pdf',
  },
  {
    fact: 'Black college students are more likely to go into debt to pay for college',
    source: 'US Department of Education',
    link: 'https://nces.ed.gov/pubs2016/2016007.pdf',
  },
  {
    fact: 'The average Black college graduate leaves a public four-year institution with $111486 in debt; 55% more debt than the average white college student.',
    source: 'American Council on Education',
    link: 'https://1xfsu31b52d33idlp13twtos-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/REHE-Exec-Summary-FINAL.pdf',
  },
  {
    fact: 'Black Americans with college degrees are twice as likely to be unemployed',
    source: 'The Atlantic',
    link: 'https://www.theatlantic.com/politics/archive/2014/05/african-americans-with-college-degrees-are-twice-as-likely-to-be-unemployed-as-other-graduates/430971/',
  },
  {
    fact: "Black Americans with 'white' names receive 50% more callbacks for job applications",
    source: 'National Bureau of Economic Research',
    link: 'https://www.nber.org/digest/sep03/w9873.html',
  },
  {
    fact: 'The median wealth of black college graduates is $23400 vs $180500 in white college graduates',
    source: 'Economic Policy Institute',
    link: 'https://www.epi.org/blog/the-racial-wealth-gap-how-african-americans-have-been-shortchanged-out-of-the-materials-to-build-wealth/',
  },
  {
    fact: 'White researches are twice as likely to win research grants than black researchers',
    source: 'National Institute of Health',
    link: 'https://nexus.od.nih.gov/all/2019/10/10/delving-further-into-the-funding-gap-between-white-and-black-researchers/',
  },
  {
    fact: '27% of black Americans live in poverty compared to 9.9% of whites',
    source: 'Economic Policy Institute 2018',
    link: 'https://www.epi.org/publication/50-years-after-the-kerner-commission/',
  },
  {
    fact: 'Median overall wealth for black families is $11030 vs $134230 for white families',
    source: 'Economic Policy Institute',
    link: 'https://www.epi.org/blog/the-racial-wealth-gap-how-african-americans-have-been-shortchanged-out-of-the-materials-to-build-wealth/',
  },
  {
    fact: 'The median wealth for a single black woman is $100 vs $41000 for single white women',
    source: 'Insight Center for Community Economic Development',
    link: 'https://www.democracynow.org/2010/3/12/study_median_wealth_for_single_black',
  },
  {
    fact: 'Black Americans represent 40% of the homeless population despite only being 13% of the general population',
    source: 'National Alliance to End Homelessness',
    link: 'https://endhomelessness.org/resource/racial-inequalities-homelessness-numbers/#time',
  },
  {
    fact: 'Black homebuyers are shown 17% fewer homes and apartments than white buyers',
    source: 'US Department of Housing and Urban Development',
    link: 'https://www.huduser.gov/portal/Publications/pdf/HUD-514_HDS2012.pdf',
  },
  {
    fact: 'Black homebuyers are more likely to be denied an appointment with a real estate agent',
    source: 'US Department of Housing and Urban Development',
    link: 'https://www.huduser.gov/portal/Publications/pdf/HUD-514_HDS2012.pdf',
  },
  {
    fact: 'Housing lenders have disproportionately steered Black Americans to subprime housing loans even when they were qualified for prime loans.',
    source: 'Suffolk University Law Review',
    link: 'https://cpb-us-e1.wpmucdn.com/sites.suffolk.edu/dist/3/1172/files/2014/01/Rice-Swesnik_Lead.pdf',
  },
  {
    fact: 'Only 43% of black householders own their home vs 72% of white householders',
    source: 'PEW Research Center',
    link: 'https://www.pewsocialtrends.org/2016/06/27/1-demographic-trends-and-economic-well-being/#fn-21776-14',
  },
  {
    fact: 'Comparable homes in black neighborhoods are worth 23% less compared to white neighborhoods',
    source: 'Brookings',
    link: 'https://www.brookings.edu/research/devaluation-of-assets-in-black-neighborhoods/',
  },
  {
    fact: 'Statistically Black Americans receive harsher punishments for the same crimes.',
    source: 'University of Michigan Law Center',
    link: 'https://repository.law.umich.edu/cgi/viewcontent.cgi?article=2413&context=articles',
  },
  {
    fact: 'Black children in the criminal justice system are 18x more likely to be sentenced as adults compared to white children.',
    source: 'Journal of Personality and Social Psychology 2014',
    link: 'https://www.apa.org/pubs/journals/releases/psp-a0035663.pdf',
  },
  {
    fact: "Prosecutors are 1.75x more likely to file charges on black American's that require mandatory minimums.",
    source: 'University of Michigan Law Center',
    link: 'https://repository.law.umich.edu/cgi/viewcontent.cgi?article=2413&context=articles',
  },
  {
    fact: 'Black drivers are 20% more likely to be pulled over than white drivers.',
    source: 'Nature Human Behaviour (Study by Stanford University)',
    link: 'https://5harad.com/papers/100M-stops.pdf',
  },
  {
    fact: 'Black Americans are searched more than white Americans',
    source: 'Stanford',
    link: 'https://openpolicing.stanford.edu/findings/',
  },
  {
    fact: 'Police statistically require less suspicion to search black drivers',
    source: 'Stanford Threshold Test',
    link: 'https://openpolicing.stanford.edu/findings/',
  },
  {
    fact: 'Black Americans represent 40% of the total prison population despite representing 13% of the general population',
    source: 'United States Census 2010',
    link: 'https://www.census.gov/prod/cen2010/doc/sf1.pdf',
  },
  {
    fact: 'Black Americans are 3.6x more likely to be arrested for marijuana usage despite virtually equal usage rates',
    source: 'ACLU',
    link: 'https://graphics.aclu.org/marijuana-arrest-report/',
  },
  {
    fact: 'Black Americans are twice as likely to be incarcerated while awaiting trial & pay money for bail',
    source: 'Bureau of Justice Statistics',
    link: 'https://www.bjs.gov/content/pub/pdf/pji02.pdf',
  },
  {
    fact: 'Black Americans pay higher bail than white Americans convicted of the same crime',
    source: 'New York University Journal of Legislation and Public Policy',
    link: 'https://www.nyujlpp.org/wp-content/uploads/2014/01/Jones-Give-Us-Free-16nyujlpp919.pdf',
  },
  {
    fact: 'Facial recognition software is more likely to generate false criminal positives for Black Americans',
    source: 'ACLU',
    link: 'https://www.aclu.org/blog/privacy-technology/surveillance-technologies/amazons-face-recognition-falsely-matched-28',
  },
  {
    fact: 'As a result of increased felony incarceration 7.4% of black American men are disenfranchised (unable to vote).',
    source: 'The Sentencing Project',
    link: 'https://www.sentencingproject.org/publications/6-million-lost-voters-state-level-estimates-felony-disenfranchisement-2016/',
  },
  {
    fact: 'Black Americans in urban and suburban areas must travel further to find grocery stores and fresh food making it more difficult to maintain a healthy diet.',
    source: 'US National Library of Medicine',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3701025/',
  },
  {
    fact: "Black Americans are over two times more likely to be 'Food Insecure' meaning they have limited or uncertain access to adequate food.",
    source: 'Family Community Health',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5823283/',
  },
  {
    fact: 'Fast food chains target black neighborhoods contributing to increases in obesity rates',
    source: 'American Journal of Preventive Medicine',
    link: 'https://www.ajpmonline.org/article/S0749-3797(04)00139-4/fulltext',
  },
  {
    fact: 'As a result of this diet Black Americans are 50% more likely to be diagnosed with a stroke and 40% more likely to die from a stroke',
    source: 'US Department of Health and Human Services',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=28',
  },
  {
    fact: 'Black Americans are also 60% more likely to be diagnosed with diabetes',
    source: 'Center for Disease Control',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=18',
  },
  {
    fact: 'Black Americans are over twice as likely to die from diabetes',
    source: 'Center for Disease Control',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=18',
  },
  {
    fact: 'Black Americans have far less access to local public parks. In Los Angeles white Americans have 31.8 acres of local parkland per 1000 residents whereas Black Americans have 1.7 acres of parkland per 1000 residents.',
    source: 'National Parks and Recreation Association',
    link: 'https://www.nrpa.org/uploadedFiles/nrpa.org/Publications_and_Research/Research/Papers/Parks-Rec-Underserved-Areas.pdf',
  },
  {
    fact: "People with 'Black-American' names are 16% less likely to be approved for AirBNB rentals",
    source: 'American Economic Journal',
    link: 'http://www.benedelman.org/publications/airbnb-guest-discrimination-2016-09-16.pdf',
  },
  {
    fact: "Uber riders with 'African-American' sounding names are 3x more likely to have their ride canceled.",
    source: 'National Bureau of Economic Research',
    link: 'https://www.nber.org/papers/w22776.pdf',
  },
  {
    fact: 'Black Americans on average wait longer for Uber and Lyft rides',
    source: 'National Bureau of Economic Research',
    link: 'https://www.nber.org/papers/w22776.pdf',
  },
  {
    fact: 'People are less likely to stop for black Americans at a crosswalk',
    source: 'National institute for Transportation and Communities',
    link: 'https://nitc.trec.pdx.edu/research/project/733',
  },
  {
    fact: 'Black children are 2.2x more likely to be exposed to lead before being born largely in part to lead exposure in black American women.',
    source: 'US Library of Medicine',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5623116/',
  },
  {
    fact: 'Black Americans are twice as likely to die in infancy',
    source: 'US Department of Health and Human Services',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=23',
  },
  {
    fact: 'Black American mothers are less likely to receive prenatal care',
    source: 'US Department of Health and Human Services',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=23',
  },
  {
    fact: 'Black Americans are less likely to survive a battle with cancer',
    source: 'US Department of Health and Human Services',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=23',
  },
  {
    fact: 'Black Americans are less likely to receive immunizations for diseases like Hepatitis Influenza and Pneumonia',
    source: 'US Department of Health and Human Services',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=23',
  },
  {
    fact: 'Black Americans are less likely to receive organ transplants',
    source: 'US Department of Health and Human Services',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=27',
  },
  {
    fact: 'Black Americans are more likely to be exposed to harmful respiratory pollutants like diesel fumes',
    source: 'Science Daily (Study by Ohio State University)',
    link: 'https://www.sciencedaily.com/releases/2019/08/190810094052.htm',
  },
  {
    fact: 'Black Americans are 60% more likely to be diagnosed with asthma',
    source: 'CDC',
    link: 'https://www.cdc.gov/asthma/nhis/2015/table4-1.htm',
  },
  {
    fact: 'Black American adults are 2.8x more likely to die of asthma',
    source: 'CDC',
    link: 'https://www.cdc.gov/asthma/nhis/2015/table4-1.htm',
  },
  {
    fact: 'Black American children are 7.1x more likely to die of asthma',
    source: 'CDC',
    link: 'https://www.cdc.gov/nchs/data/ad/ad381.pdf',
  },
  {
    fact: 'Black Americans are 50% more likely to be diagnosed with high blood pressure',
    source: 'US Department of Health and Human Services',
    link: 'https://www.cdc.gov/nchs/data/hus/hus18.pdf',
  },
  {
    fact: 'Black Americans are 46% less likely to be offered employer-sponsored health insurance',
    source: 'Kaiser Family Foundation',
    link: 'https://www.kff.org/other/state-indicator/rate-by-raceethnicity-2/?currentTimeframe=0&sortModel=%7B%22colId%22%3A%22Location%22%2C%22sort%22%3A%22asc%22%7D',
  },
  {
    fact: 'Black Americans experience higher depression rates',
    source: 'National Institute of Health',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1199525/',
  },
  {
    fact: 'Black Americans are less likely to receive mental health services',
    source: 'Substance Abuse and Mental Health Services Administration',
    link: 'https://www.samhsa.gov/data/report/2018-nsduh-detailed-tables',
  },
  {
    fact: 'Black Americans are less likely to receive treatment for depression',
    source: 'Substance Abuse and Mental Health Services Administration',
    link: 'https://www.samhsa.gov/data/report/2018-nsduh-detailed-tables',
  },
  {
    fact: 'Black Americans are twice as likely than whites to be diagnosed with schizophrenia.',
    source: 'American Psychological Association',
    link: 'https://www.apa.org/advocacy/civil-rights/diversity/african-american-health',
  },
  {
    fact: 'Black American teenagers are more likely to attempt suicide.',
    source: 'US Department of Health and Human Services',
    link: 'https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=24',
  },
  {
    fact: 'On average black Americans live shorter lives than white Americans.',
    source: 'CDC',
    link: 'https://www.cdc.gov/nchs/data/hus/2017/015.pdf',
  },
];

console.log(examples);
const nextButton = document.querySelector('.button_next');
const buttonLink = document.querySelector('.button-link');
const buttonSource = document.querySelector('.button_source');
const factElement = document.querySelector('.fact');
const sourceElement = document.querySelector('.source');

function renderFact() {
  const factNumber = Math.floor(Math.random() * examples.length);
  // const factNumber = 41;
  const fact = examples[factNumber];
  factElement.textContent = fact.fact;
  sourceElement.textContent = fact.source;
  sourceElement.href = fact.link;
  buttonLink.href = fact.link;
  nextButton.textContent = 'Next';
  buttonSource.textContent = 'Source';
}

function loadPage() {
  factElement.textContent = 'Learn facts about Systemic Racism in the United States';
  sourceElement.textContent = '#BlackLivesMatter';
  sourceElement.href = 'https://blacklivesmatter.com/';
  buttonLink.href = 'https://curiousrefuge.com/blog/systemic-racism';
  nextButton.textContent = 'Start';
  buttonSource.textContent = 'View Article';
}

renderFact();
loadPage();

nextButton.addEventListener('click', renderFact);
