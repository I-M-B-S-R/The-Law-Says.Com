
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const COLORADO_RIVER_INDIAN_TRIBES_CONTENT: TribeContent = {
  title: 'Colorado River Indian Tribes',
  summary: "The Colorado River Indian Tribes (CRIT) includes four distinct tribes: the Mohave, Chemehuevi, Hopi, and Navajo. The reservation was created in 1865 for the 'Indians of the Colorado River and its tributaries.' It stretches along the Colorado River on both the Arizona and California sides and is a major agricultural center.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Colorado River Indian Tribes are governed by the CRIT Constitution and By-Laws, approved in 1937. The governing body is a nine-member Tribal Council, which includes a chairman, vice-chairman, and secretary, all elected by the tribal membership.</p>
        <p>You can find the full text of the constitution on the <a href='https://crit-nsn.gov/crit-government/council/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's official government website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The CRIT Tribal Council enacts laws and ordinances that govern the reservation. The CRIT Law and Order Code is a comprehensive set of laws addressing criminal and civil matters, traffic, domestic relations, and more.</p>
        <p>The official Tribal Code is available through the <a href='https://crit-nsn.gov/crit-nsn/wp-content/uploads/2021/04/CRIT-LAW-AND-ORDER-CODE_4.12.2021.pdf' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's website</a> as a downloadable PDF.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The CRIT Tribal Court system has jurisdiction over legal cases arising within the reservation's boundaries. The courts handle a variety of cases, including civil disputes, criminal proceedings involving tribal members, and juvenile matters.</p>
        <p>Information about court services, forms, and contact details can be found on the <a href='https://crit-nsn.gov/crit-judicial/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>CRIT Judicial Branch website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement and emergency services are provided by the Colorado River Indian Tribes Police Department. The department is responsible for enforcing tribal, state, and federal laws on the reservation to ensure public safety.</p>
        <p>For more information, visit the <a href='https://crit-nsn.gov/crit-police/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>CRIT Police Department website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Colorado River Indian Reservation is unique in that it is home to four distinct tribes. The reservation was originally established for the Mohave and Chemehuevi, but members of the Hopi and Navajo tribes were relocated there in the 1940s. Today, CRIT has a thriving agricultural economy, leasing thousands of acres of its fertile valley land for farming. The tribes also operate the BlueWater Resort & Casino.</p>
        <p>For current events and cultural information, visit the <a href='https://crit-nsn.gov/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Colorado River Indian Tribes website</a>.</p>
      `,
    },
  },
};
