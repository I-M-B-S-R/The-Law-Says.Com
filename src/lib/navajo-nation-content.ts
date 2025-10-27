
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const NAVAJO_NATION_CONTENT: TribeContent = {
  title: 'Navajo Nation',
  summary: "The Navajo Nation (Diné Bikéyah) is the largest land-area-based tribe in the United States, spanning across three states: Arizona, New Mexico, and Utah. It is renowned for its stunning landscapes, including Monument Valley, and its rich cultural heritage.",
  sections: {
    constitution: {
      title: 'Tribal Government Structure',
      content: `
        <p>The Navajo Nation operates under a unique tripartite government system, similar to the U.S. federal government, with executive, legislative, and judicial branches. Unlike many tribes, the Navajo Nation does not have a formal constitution. Instead, its government is structured by the Navajo Nation Code, particularly Title II.</p>
        <p>The legislative branch is the 24-member Navajo Nation Council. The executive branch is led by the President and Vice President. More information can be found on the <a href='http://www.navajo-nsn.gov/Government.htm' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Navajo Nation Government website</a>.</p>
      `,
    },
    code: {
      title: 'Navajo Nation Code',
      content: `
        <p>The Navajo Nation has a comprehensive and sophisticated set of laws known as the Navajo Nation Code. This code covers a vast range of topics, including criminal and civil law, family law, property, and natural resources.</p>
        <p>The Navajo Nation Code is available online through various sources, including the <a href='https://www.navajonationcode.com/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Navajo Nation Code website</a>, which provides a searchable version of the statutes.</p>
      `,
    },
    courts: {
      title: 'Judicial Branch',
      content: `
        <p>The Judicial Branch of the Navajo Nation is a well-established court system responsible for interpreting and applying the laws of the Navajo Nation. It consists of district courts and the Supreme Court of the Navajo Nation, which is the highest court.</p>
        <p>Information about the court system, including court rules and forms, can be found on the <a href='http://www.navajocourts.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official website of the Judicial Branch of the Navajo Nation</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Navajo Nation Police Department. With a jurisdiction covering over 27,000 square miles, it is one of the largest tribal law enforcement agencies in the United States. The department is responsible for enforcing Navajo Nation and applicable federal laws.</p>
        <p>More information is available on the <a href='https://www.nnpolice.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Navajo Nation Police Department website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The history of the Navajo people is one of resilience and adaptation. A pivotal moment was the 'Long Walk' of 1864, a forced removal to Bosque Redondo, and their subsequent return to their ancestral lands after the Treaty of 1868. The Navajo Code Talkers played a vital, unbreakable role in World War II communications.</p>
        <p>Today, the Navajo Nation is a vibrant, modern nation that continues to preserve its language and rich cultural traditions. The Nation operates various enterprises and hosts numerous events, including the annual Navajo Nation Fair. For more information, visit the <a href='http://www.discovernavajo.com/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Discover Navajo tourism website</a>.</p>
      `,
    },
  },
};
