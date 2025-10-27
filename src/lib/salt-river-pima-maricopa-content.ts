
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const SALT_RIVER_PIMA_MARICOPA_INDIAN_COMMUNITY_CONTENT: TribeContent = {
  title: 'Salt River Pima-Maricopa Indian Community',
  summary: "The Salt River Pima-Maricopa Indian Community (SRPMIC) is located in the metropolitan Phoenix area, bordering Scottsdale, Tempe, Mesa, and Fountain Hills. The Community is comprised of two distinct tribes: the Onk Akimel O’odham (Pima) and the Xalychidom Piipaash (Maricopa), who have shared a common land base for centuries.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Salt River Pima-Maricopa Indian Community is governed by its Constitution, which was adopted in 1940. The governing body is the Community Council, consisting of a President, a Vice-President, and seven council members, all elected by the enrolled members of the Community.</p>
        <p>More information about the tribal government can be found on the <a href='https://www.srpmic-nsn.gov/government/council/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official SRPMIC website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The SRPMIC Tribal Council enacts laws and ordinances that are compiled into the Salt River Pima-Maricopa Indian Community Code of Ordinances. This comprehensive code covers a wide range of subjects including civil and criminal law, traffic, family law, and business regulations.</p>
        <p>The official Tribal Code is available online through <a href='https://www.srpmic-nsn.gov/government/code-of-ordinances/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>the Community's website</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Salt River Pima-Maricopa Indian Community has its own comprehensive judicial system, known as the Salt River Community Court. The court has jurisdiction over a wide range of cases arising under the community's laws, including civil, criminal, and juvenile matters.</p>
        <p>Information about court services, forms, and contact details can be found on the <a href='http://srpmic-nsn.gov/government/judicial/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Salt River Community Court website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Salt River Police Department (SRPD). The department is a full-service law enforcement agency responsible for enforcing tribal, state, and federal laws within the Community's boundaries.</p>
        <p>For more information, visit the <a href='https://www.srpmic-nsn.gov/government/police/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Salt River Police Department's webpage</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Onk Akimel O’odham and Xalychidom Piipaash have a long history of farming the fertile lands along the Salt River. The Community was created by Executive Order in 1879. Its prime location in the heart of the Phoenix metro area has allowed for significant economic development.</p>
        <p>Today, the Community operates numerous successful enterprises, including Talking Stick Resort, Casino Arizona, Salt River Fields at Talking Stick (the spring training home of the Arizona Diamondbacks and Colorado Rockies), and The Pavilions at Talking Stick shopping center. For current news and cultural information, visit the <a href='https://www.srpmic-nsn.gov/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official SRPMIC website</a>.</p>
      `,
    },
  },
};
