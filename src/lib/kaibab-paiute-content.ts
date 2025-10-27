
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const KAIBAB_PAIUTE_CONTENT: TribeContent = {
  title: 'Kaibab Band of Paiute Indians',
  summary: "The Kaibab Band of Paiute Indians resides on the Kaibab-Paiute Indian Reservation in the 'Arizona Strip,' located on the Utah border in northwestern Arizona. The Tribe is a federally recognized band of the Southern Paiute people, who have traditionally inhabited a vast territory in the Great Basin and Colorado Plateau.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Kaibab Band of Paiute Indians is governed by its Constitution and By-Laws, which were approved in 1969. The governing body is the six-member Tribal Council, which includes a Chairperson and Vice-Chairperson, all elected by the tribal membership.</p>
        <p>More information about the tribal government structure can be found on the <a href='https://www.kaibabpaiute-nsn.gov/tribal-council/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Kaibab Paiute website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Kaibab Paiute Tribal Council enacts laws and ordinances that govern the reservation. The tribe's Law and Order Code addresses civil and criminal matters, traffic, and other regulatory areas.</p>
        <p>The <a href='https://narf.org/nill/codes/kaibabcode/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a> archives a version of the tribe's code. For the most current laws, direct contact with the tribal government is recommended.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Kaibab Paiute Tribe has its own judicial system, which includes the Tribal Court. The court adjudicates cases arising under the tribe's laws and has jurisdiction over tribal members and activities on the reservation as defined by tribal and federal law.</p>
        <p>Contact information for the Tribal Court can be found on the <a href='https://www.kaibabpaiute-nsn.gov/tribal-court/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's judicial webpage</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Kaibab Paiute Tribal Marshal's Office. The department is responsible for enforcing tribal, state, and federal laws, ensuring the safety and security of the community.</p>
        <p>Contact information for the Marshal's Office is available through the <a href='https://www.kaibabpaiute-nsn.gov/tribal-directory/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribal directory</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Kaibab Paiutes are one of several bands of the Southern Paiute Nation. Their reservation was established by executive order in 1913. The tribe is known for its commitment to preserving its language and cultural traditions. The name 'Kaibab' means 'mountain lying down.' The tribe operates several enterprises, including an RV park and a nursery that specializes in native plants. The tribe also hosts an annual 'Paiute-Full' Heritage Day celebration.</p>
        <p>For more information on the tribe's culture, history, and current events, visit the <a href='https://www.kaibabpaiute-nsn.gov/about-us/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Kaibab Paiute website</a>.</p>
      `,
    },
  },
};
