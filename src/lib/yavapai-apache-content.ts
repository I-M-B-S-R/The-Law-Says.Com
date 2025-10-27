
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const YAVAPAI_APACHE_CONTENT: TribeContent = {
  title: 'Yavapai-Apache Nation',
  summary: "The Yavapai-Apache Nation is a federally recognized tribe based in Camp Verde, Arizona. It is a composite of two distinct historical tribes: the Yavapai, who are Yuman-speaking people, and the Dilzhe'e Apache, who are Athabaskan-speaking. The two tribes were forcibly merged onto the Rio Verde Reserve and later marched to the San Carlos Apache Reservation, but eventually returned to their homeland.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Yavapai-Apache Nation is governed by its Constitution, which was originally approved in 1936 and significantly amended in 1992. The governing body is the Tribal Council, composed of a chairman, vice-chairwoman, and seven council members, who are elected by the tribal membership.</p>
        <p>Information about the Tribal Council can be found on the <a href='https://www.yavapai-apache.org/tribal-council/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Yavapai-Apache Nation website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Yavapai-Apache Nation Tribal Council enacts laws and ordinances that govern the Nation. The Nation has a comprehensive set of laws covering civil and criminal matters, resource management, and business regulation.</p>
        <p>The tribe's official Law and Order code and other ordinances are available for download on the <a href='https://www.yavapai-apache.org/law-order-code/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's website</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Yavapai-Apache Nation has its own judicial system, including a Tribal Court and an appellate court. The courts adjudicate cases arising under the Nation's laws and have jurisdiction over matters as defined by tribal and federal law.</p>
        <p>Information about the court system can be accessed via the <a href='https://www.yavapai-apache.org/judicial/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Judicial Branch section of the tribe's website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Yavapai-Apache Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws on the Nation's lands.</p>
        <p>Contact information for the police department is available on the <a href='https://www.yavapai-apache.org/police/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Police Department's webpage</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The history of the Yavapai-Apache Nation is marked by resilience. After being forced on a tragic 180-mile winter march to the San Carlos reservation in 1875, members of both tribes began to slip away and make the long journey back to their Verde Valley homeland. The Nation was officially recognized in the 1930s.</p>
        <p>Today, the Nation is a major economic driver in the region, operating the Cliff Castle Casino Hotel and other enterprises. For more information on the tribe's culture and history, visit the <a href='https://www.yavapai-apache.org/about-us/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Yavapai-Apache Nation website</a>.</p>
      `,
    },
  },
};
