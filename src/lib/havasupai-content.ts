
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const HAVASUPAI_CONTENT: TribeContent = {
  title: 'Havasupai Tribe',
  summary: "The Havasupai Tribe, known as the 'People of the Blue-Green Water,' reside in one of the most beautiful and remote locations in the world: a canyon deep within the Grand Canyon. Their village, Supai, is accessible only by foot, mule, or helicopter.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Havasupai Tribe is governed by its Constitution and Bylaws, which were adopted in 1939. The governing body is the Havasupai Tribal Council, composed of seven members, including a chairman and vice-chairman, elected by the tribal members.</p>
        <p>Information about the tribal government can be found on the <a href='https://theofficialhavasupaitribe.com/Havasupai-Government/havasupai-government.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Havasupai Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Havasupai Tribal Council enacts laws and ordinances to govern the reservation. The tribe's Law and Order Code covers a range of civil and criminal matters. Due to the tribe's remote location, up-to-date digital versions of the complete code can be difficult to find.</p>
        <p>An older version of the Havasupai Tribal Code is archived by the <a href='https://narf.org/nill/codes/havasupaicode/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a>. For the most current laws, direct contact with the tribal government is recommended.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Havasupai Tribal Court has jurisdiction over legal matters arising within the reservation. The court adjudicates cases involving tribal law and custom. The court system plays a vital role in self-governance for the tribe.</p>
        <p>Contact information for the Tribal Court can be found on the <a href='https://theofficialhavasupaitribe.com/Havasupai-Tribal-Court/havasupai-tribal-court.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's judicial webpage</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Havasupai Tribal Police, in conjunction with the Bureau of Indian Affairs. Officers are responsible for enforcing tribal, federal, and applicable state laws within the remote Havasu Canyon.</p>
        <p>Due to the unique challenges of their location, law enforcement operations are highly specialized. Contact information is available on the <a href='https://theofficialhavasupaitribe.com/Havasupai-Law-Enforcement/havasupai-law-enforcement.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's law enforcement webpage</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Havasupai have inhabited the Grand Canyon for over 800 years. Their traditional territory once covered a vast area, but was reduced to their current 518-acre reservation in Havasu Canyon. The tribe is world-famous for the stunning blue-green waterfalls—Havasu Falls, Mooney Falls, and Beaver Falls—that flow through their land. Tourism is the tribe's primary source of revenue.</p>
        <p>Visiting the reservation requires a permit, which must be reserved far in advance due to extremely high demand. All visitors are expected to respect the land and the tribe's rules. For information on tourism and reservations, visit the <a href='https://www.havasupaireservations.com/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Havasupai reservations website</a>.</p>
      `,
    },
  },
};
