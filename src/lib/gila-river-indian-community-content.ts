
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const GILA_RIVER_INDIAN_COMMUNITY_CONTENT: TribeContent = {
  title: 'Gila River Indian Community',
  summary: "The Gila River Indian Community is located in south-central Arizona, bordering the Phoenix metropolitan area. The community is home to members of two tribes: the Akimel O'odham (Pima) and the Pee-Posh (Maricopa). The reservation was established in 1859 and is a major force in the region's agriculture and economy.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Gila River Indian Community is governed by its Constitution and By-Laws, which were approved in 1960. The governing body is the Community Council, which consists of 17 elected representatives from seven districts within the community, led by a Governor and Lieutenant Governor who are elected at-large.</p>
        <p>You can find the full text of the constitution on the <a href='https://www.gilariver.org/index.php/government?id=129' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Community's government website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Gila River Indian Community Council enacts laws that are compiled in the GRIC Law and Order Code. This comprehensive code covers a wide range of subjects including criminal and civil law, traffic, family law, and environmental quality.</p>
        <p>The official Tribal Code is available through the <a href='https://www.gilariver.org/index.php/government?id=130' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's website</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Gila River Indian Community has its own comprehensive judicial system, including a Tribal Court and a Court of Appeals. The courts have jurisdiction over a wide range of cases arising under the community's laws, including civil, criminal, and juvenile matters.</p>
        <p>Information about court services, forms, and contact details can be found on the <a href='https://www.grichc.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Gila River Indian Community Court website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Gila River Police Department. The department is responsible for enforcing tribal, state, and federal laws across the community's vast land base, which spans over 580 square miles.</p>
        <p>For more information, visit the <a href='https://www.gilariver.org/index.php/government?id=141' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Gila River Police Department's section on the tribe's website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Akimel O'odham and Pee-Posh have farmed the Gila River valley for centuries, developing complex irrigation systems long before European contact. Today, the Gila River Indian Community continues this agricultural tradition through Gila River Farms. The Community also operates several successful economic enterprises, including Gila River Resorts & Casinos and Wild Horse Pass Motorsports Park.</p>
        <p>For current news and cultural information, visit the <a href='https://www.gilariver.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Gila River Indian Community website</a>.</p>
      `,
    },
  },
};
