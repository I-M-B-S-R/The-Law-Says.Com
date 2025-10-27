
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const FORT_MCDOWELL_YAVAPAI_NATION_CONTENT: TribeContent = {
  title: 'Fort McDowell Yavapai Nation',
  summary: "The Fort McDowell Yavapai Nation is located in Maricopa County, Arizona, about 23 miles northeast of Phoenix. The nation was created by an executive order in 1903 and is home to the Yavapai people, who have a long history in central and western Arizona.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Fort McDowell Yavapai Nation is governed by its Constitution, which was approved by the tribal members in 1936. The governing body is the Tribal Council, composed of a president, vice-president, treasurer, secretary, and one council member, all elected by the community members.</p>
        <p>Information about the Tribal Council can be found on the <a href='https://www.fmyn.org/tribal-council/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Fort McDowell Yavapai Nation website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Fort McDowell Yavapai Nation Tribal Council enacts laws and ordinances that govern the reservation. The Law and Order Code of the Fort McDowell Yavapai Nation covers various areas including criminal and civil procedure, domestic relations, and resource management.</p>
        <p>While a centralized, fully updated online version is not always available to the public, portions of the code are sometimes referenced in public documents. For official copies, contacting the tribal government directly is the best method. The <a href='https://narf.org/nill/codes/fort_mcdowell_code/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a> hosts an older version of the code.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Fort McDowell Yavapai Nation has its own judicial system, which includes the Tribal Court. The court adjudicates cases arising under the tribe's laws and has jurisdiction over tribal members and activities on the reservation as defined by tribal and federal law.</p>
        <p>More information about the court system can be found on the <a href='https://www.fmyn.org/tribal-court/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's Tribal Court webpage</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Fort McDowell Police Department. The department is responsible for enforcing tribal, state, and federal laws on the Nation's lands, ensuring the safety and security of the community and its many visitors.</p>
        <p>Information on the police department is available on the <a href='https://www.fmyn.org/police-department/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Fort McDowell Police Department webpage</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Yavapai, the 'People of the Sun,' have a rich history in Arizona. The Fort McDowell reservation was established on land that was a traditional winter home for one of the Yavapai bands. The nation is known for its successful stand against the construction of the Orme Dam in the 1980s, which would have flooded a majority of their reservation land. This victory is celebrated annually.</p>
        <p>Today, the Nation operates several successful enterprises, including the We-Ko-Pa Casino Resort, We-Ko-Pa Golf Club, and Fort McDowell Adventures. For current events and further information, visit the <a href='https://www.fmyn.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Fort McDowell Yavapai Nation website</a>.</p>
      `,
    },
  },
};
