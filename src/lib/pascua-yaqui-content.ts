
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const PASCUA_YAQUI_CONTENT: TribeContent = {
  title: 'Pascua Yaqui Tribe',
  summary: "The Pascua Yaqui Tribe has a rich history rooted in the Yaqui peoples of Sonora, Mexico. After facing persecution, many Yaquis sought refuge in Arizona. The tribe gained federal recognition in 1978. Their main reservation is located in Tucson, Arizona, with a smaller community in Guadalupe.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Pascua Yaqui Tribe is governed by its Constitution, which was adopted in 1988. It establishes a government structure with a separation of powers among the legislative, executive, and judicial branches. The governing body is the Tribal Council, which consists of eleven members, including a chairman and vice-chairman, elected by the tribal membership.</p>
        <p>You can find the full text of the constitution on the <a href='https://www.pascuayaqui-nsn.gov/index.php/government/legislative/constitution' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's official website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Pascua Yaqui Tribal Council enacts laws and ordinances that are compiled into the Pascua Yaqui Tribal Code. This comprehensive code covers a wide range of subjects including criminal and civil law, traffic, family law, and environmental quality.</p>
        <p>The official Tribal Code is available through the <a href='https://www.pascuayaqui-nsn.gov/index.php/government/legislative/tribal-code' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's website</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Pascua Yaqui Tribe has its own comprehensive judicial system, including a Tribal Court and a Court of Appeals. The courts have jurisdiction over a wide range of cases arising under the tribe's laws, including civil, criminal, and juvenile matters.</p>
        <p>Information about court services, forms, and contact details can be found on the <a href='https://www.pascuayaqui-nsn.gov/index.php/government/judicial' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Pascua Yaqui Tribe Judicial Branch website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Pascua Yaqui Police Department. The department is responsible for enforcing tribal, state, and federal laws on the Nation's lands, ensuring the safety and security of the community and its visitors.</p>
        <p>For more information, visit the <a href='https://www.pascuayaqui-nsn.gov/index.php/government/executive/police-department' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Pascua Yaqui Police Department's webpage</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Yaqui people, or 'Yoeme,' have a long history of resistance and cultural preservation. Their ancestral lands are in the Rio Yaqui valley in Sonora, Mexico. Many Yaquis migrated to Arizona in the late 19th and early 20th centuries to escape violent conflict with the Mexican government. They established communities in the Tucson area, including Old Pascua Village. The Tribe's federal recognition in 1978 was a landmark achievement.</p>
        <p>Today, the Pascua Yaqui Tribe operates several successful enterprises, including Casino Del Sol and Casino of the Sun. The Tribe is dedicated to preserving its unique cultural heritage, which includes the Deer Dance and the observance of a Lenten ceremonial season that blends Yaqui and Catholic traditions. For current news, visit the <a href='https://www.pascuayaqui-nsn.gov/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Pascua Yaqui Tribe website</a>.</p>
      `,
    },
  },
};
