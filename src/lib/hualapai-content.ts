
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const HUALAPAI_CONTENT: TribeContent = {
  title: 'Hualapai Tribe',
  summary: "The Hualapai Tribe, known as the 'People of the Tall Pines,' have inhabited the Grand Canyon and northern Arizona for centuries. Their reservation, established in 1883, spans over one million acres along the Grand Canyon's western rim.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Hualapai Tribe is governed by the Constitution and By-laws of the Hualapai Tribe of the Hualapai Reservation, which was approved in 1938 and significantly amended in 1991. The governing body is the Hualapai Tribal Council, composed of nine members, including a chairman and vice-chairman, who are elected by the community.</p>
        <p>The constitution can be accessed through the tribe's official website or on the <a href='https://narf.org/nill/codes/hualapaicode/HualapaiConst.pdf' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Hualapai Tribal Council enacts laws and ordinances that are compiled into the Hualapai Law and Order Code. The code covers civil and criminal matters, traffic, environmental protection, and business regulations.</p>
        <p>The Hualapai Law and Order Code is available online through resources provided by the <a href='https://hualapai-nsn.gov/government-2/laws/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Hualapai Tribe's website</a> and is also hosted by the <a href='https://narf.org/nill/codes/hualapaicode/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Hualapai Tribe has its own judicial system, which includes the Hualapai Tribal Court and a Court of Appeals. These courts have jurisdiction over cases arising under the tribe's laws and play a critical role in exercising the tribe's sovereignty.</p>
        <p>Information about the Hualapai Tribal Court, its rules, and services can be found on the <a href='https://hualapai-nsn.gov/judicial/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>judicial section of the tribe's official website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services on the Hualapai Reservation are provided by the Hualapai Nation Police Department. Officers are responsible for enforcing tribal, federal, and applicable state laws, ensuring the safety of tribal members and the millions of visitors to Grand Canyon West.</p>
        <p>Contact information for the police department is available through the <a href='https://hualapai-nsn.gov/departments-3/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's departments page</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Hualapai people have a deep connection to the Grand Canyon, which is central to their culture and spirituality. Today, the tribe is a major economic driver in the region through its enterprise, Grand Canyon West. This includes the world-famous Grand Canyon Skywalk, a glass bridge that extends 70 feet out over the canyon rim, offering unparalleled views. The tribe also operates Hualapai River Runners, offering whitewater rafting trips on the Colorado River.</p>
        <p>For more information on the tribe's culture, history, and tourism enterprises, visit the <a href='https://hualapai-nsn.gov/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Hualapai Tribe website</a> and the <a href='https://grandcanyonwest.com/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Grand Canyon West website</a>.</p>
      `,
    },
  },
};
