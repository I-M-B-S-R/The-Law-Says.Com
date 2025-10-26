
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const AK_CHIN_CONTENT: TribeContent = {
  title: 'Ak-Chin Indian Community',
  summary: "The Ak-Chin Indian Community is located in the Santa Cruz Valley of Southern Arizona. The Community lies 30 miles south of Phoenix in the northwestern part of Pinal County. Ak-Chin has an enrollment of more than 1,100 tribal members and a land base of just over 22,000 acres.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Ak-Chin Indian Community is governed by the Constitution and By-Laws of the Ak-Chin Indian Community, which was approved by the Secretary of the Interior on December 29, 1961. It establishes the governing body of the Community, the Ak-Chin Indian Community Council, and outlines its powers and responsibilities.</p>
        <p>You can find the full text of the constitution at the <a href='https://www.loc.gov/item/2013110023/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Library of Congress</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Ak-Chin Indian Community Council enacts laws and ordinances that govern the community. The Ak-Chin Tribal Code is a comprehensive set of laws covering civil and criminal matters, employment, environmental quality, and more.</p>
        <p>The official Tribal Code is available through the Community's website or by contacting the tribal government offices directly. A version of the code is hosted online by the <a href='https://narf.org/nill/codes/akchin_code/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Ak-Chin Indian Community has its own judicial system, including a Tribal Court and an appellate court system. The Tribal Court has jurisdiction over a wide range of cases arising within the community's boundaries, including civil disputes, family law, and criminal matters involving tribal members.</p>
        <p>Information about court procedures, forms, and contact information can typically be found on the <a href='https://www.ak-chin.nsn.us/tribal-government/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Ak-Chin Community's government website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services for the Ak-Chin Indian Community are provided by the Ak-Chin Police Department. The department is responsible for enforcing tribal and applicable state and federal laws, maintaining public order, and ensuring the safety and security of the community.</p>
        <p>For more information, visit the <a href='https://www.ak-chin.nsn.us/police-department/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Ak-Chin Police Department website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The name Ak-Chin is O'odham for 'mouth of the wash' or 'place where the wash loses itself in the sand or ground.' The Community was officially formed in 1912. Today, the Ak-Chin Indian Community is known for its successful agricultural enterprises, particularly Ak-Chin Farms, and its popular Harrah's Ak-Chin Casino and Resort.</p>
        <p>The Community hosts several events throughout the year, including the popular Masik Tas (Birthday) Celebration. For current events and information, visit the official <a href='https://www.ak-chin.nsn.us/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Ak-Chin Indian Community website</a>.</p>
      `,
    },
  },
};
