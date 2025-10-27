
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const SAN_JUAN_SOUTHERN_PAIUTE_CONTENT: TribeContent = {
  title: 'San Juan Southern Paiute Tribe',
  summary: "The San Juan Southern Paiute Tribe is located in northern Arizona, with tribal lands spread across Coconino and Navajo counties, within the western portion of the Navajo Nation. The Tribe gained federal recognition in 1990 and is known for its members' distinct artistic skills, especially in traditional Navajo-style basket weaving.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The San Juan Southern Paiute Tribe is governed by its Constitution, which establishes the structure of the tribal government. The governing body is the seven-member Tribal Council, known as the 'Shu-ghee-ni,' which includes a Chairperson and Vice-Chairperson elected by the tribal membership.</p>
        <p>Information about the tribal government can be found on the <a href='https://www.sanjuanpaiute-nsn.gov/tribal-council' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official San Juan Southern Paiute Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The San Juan Southern Paiute Tribal Council enacts ordinances to govern the tribe and its lands. As a more recently recognized tribe, a comprehensive, publicly available online version of their legal code is not readily accessible. For official copies of tribal laws, direct contact with the tribal government is the most reliable method.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The tribe is working to develop and strengthen its own judicial system to handle legal matters arising under its jurisdiction. For specific information regarding the tribe's court services, it is best to contact the tribal government offices directly.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services on San Juan Southern Paiute tribal lands are often provided in coordination with the Bureau of Indian Affairs (BIA) and Navajo Nation law enforcement, given the location of their lands within the Navajo Nation.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The San Juan Southern Paiutes have a long history in the region, distinct from their Navajo neighbors. They maintained their cultural identity for decades before achieving federal recognition. The tribe is highly regarded for its beautiful and intricate basketry, a vital part of its cultural and economic life.</p>
        <p>For more information on the tribe's history, culture, and current events, visit the <a href='https://www.sanjuanpaiute-nsn.gov/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official San Juan Southern Paiute Tribe website</a>.</p>
      `,
    },
  },
};
