
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const TOHONO_OODHAM_CONTENT: TribeContent = {
  title: 'Tohono O\'odham Nation',
  summary: "The Tohono O'odham Nation is located in south-central Arizona. Its reservation is the second largest in the state, after the Navajo Nation, and it shares a 75-mile border with Mexico. The name Tohono O'odham means 'Desert People.'",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Tohono O'odham Nation is governed by its Constitution, which was adopted in 1986, replacing an earlier 1937 constitution. It establishes a three-branch government. The legislative branch is the Tohono O'odham Legislative Council, composed of 22 representatives from the nation's 11 districts.</p>
        <p>Information about the tribal government can be found on the <a href='https://www.tonation-nsn.gov/government/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Tohono O'odham Nation website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Tohono O'odham Legislative Council enacts laws, resolutions, and ordinances that are compiled into the Nation's Law and Order Code. This code governs a wide range of subjects including criminal and civil law, domestic relations, and natural resources.</p>
        <p>An online version of the <a href='https://www.tonation-nsn.gov/pro/wp-content/uploads/2021/04/Law-and-Order-Code-complete-certified-3.26.21.pdf' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Law and Order Code</a> is available as a PDF on the tribe's official website.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Tohono O'odham Nation has a sophisticated judicial system, including trial courts and an appellate court. The courts adjudicate cases arising under the Nation's laws and have jurisdiction over tribal members and activities on the reservation.</p>
        <p>Information about the Judicial Branch, including court rules and forms, can be found on the <a href='https://www.tonation-nsn.gov/judicial-court/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Judicial Branch's section of the tribe's website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Tohono O'odham Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws across the Nation's vast territory, which is roughly the size of Connecticut.</p>
        <p>More information is available on the <a href='https://www.tonation-nsn.gov/topd-main/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Tohono O'odham Police Department website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The O'odham have inhabited the Sonoran Desert for thousands of years. The drawing of the U.S.-Mexico border in the 19th century divided their traditional lands, a situation that continues to have profound impacts on the Nation today. The Nation is comprised of four peoples: the Tohono O'odham, Hia-Ced O'odham, Akimel O'odham, and Sobaipuri O'odham.</p>
        <p>Today, the Tohono O'odham Nation operates several successful enterprises, including the Desert Diamond Casinos. The Nation is also a strong advocate for its cultural preservation and for the rights of its members whose lives are affected by the international border. For more information, visit the <a href='https://www.tonation-nsn.gov/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Tohono O'odham Nation website</a>.</p>
      `,
    },
  },
};
