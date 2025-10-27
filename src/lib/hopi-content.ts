
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const HOPI_CONTENT: TribeContent = {
  title: 'Hopi Tribe',
  summary: "The Hopi Tribe resides on the Hopi Reservation in northeastern Arizona. The name 'Hopi' is a shortened form of their original name, 'Hopituh Shi-nu-mu,' meaning 'The Peaceful People.' They are renowned for their ancient culture, intricate spiritual beliefs, and villages built atop high mesas, including Old Oraibi, one of the oldest continuously inhabited settlements in the United States.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Hopi Tribe is governed by the Constitution and By-Laws of the Hopi Tribe, which was approved by the tribe in 1936. The constitution establishes the Hopi Tribal Council as the governing body, composed of representatives from the various villages.</p>
        <p>You can find the text of the constitution on the <a href='https://www.hopi-nsn.gov/wp-content/uploads/2021/08/Hopi-Constitution-and-By-Laws-1.pdf' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Hopi Tribe's official website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Hopi Tribal Council enacts ordinances that form the Hopi Tribal Code. These laws govern a wide range of activities on the reservation, including land use, resource management, and civil and criminal matters.</p>
        <p>The tribe's ordinances are available on the <a href='https://www.hopi-nsn.gov/tribal-government/hopi-tribal-council/ordinances/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Hopi website</a>. An older version is also archived by the <a href='https://narf.org/nill/codes/hopicode/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Hopi Tribe has its own judicial system, consisting of the Hopi Tribal Court and an appellate court. The courts adjudicate cases arising under Hopi law and custom, playing a vital role in the tribe's sovereignty and self-governance.</p>
        <p>Information about the Hopi Tribal Courts can be found on the <a href='https://www.hopi-nsn.gov/tribal-government/judicial-branch/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Judicial Branch section of the tribe's website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Hopi Resource Enforcement Services (HRES) and the Bureau of Indian Affairs (BIA) Hopi Agency. They are responsible for patrolling the reservation, enforcing laws, and ensuring public safety.</p>
        <p>For more information, visit the <a href='https://www.hopi-nsn.gov/tribal-government/department-of-natural-resources/hopi-resource-enforcement-services/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>HRES webpage</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Hopi people have a rich cultural history as farmers and artisans in a challenging desert environment. Their complex cosmology and ceremonial cycle are central to their way of life. The tribe is famous for its intricate katsina carvings, pottery, and silverwork.</p>
        <p>The Hopi reservation is completely surrounded by the Navajo Nation, and the tribe has a long and complex history with its neighbors. The villages of the Hopi Mesas are centers of cultural and spiritual life. For more information, visit the <a href='https://www.hopi-nsn.gov/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Hopi Tribe website</a>.</p>
      `,
    },
  },
};
