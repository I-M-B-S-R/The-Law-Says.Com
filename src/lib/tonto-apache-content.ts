
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const TONTO_APACHE_CONTENT: TribeContent = {
  title: 'Tonto Apache Tribe',
  summary: "The Tonto Apache Tribe is located near Payson, in north-central Arizona. The reservation was established in 1972 for the tribe, which is composed of descendants of the 'Tontos' who were forcibly relocated from the area in the 1870s and later returned.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Tonto Apache Tribe is governed by its Constitution and Bylaws, which were approved in 1972. The governing body is the Tonto Apache Tribal Council, composed of five members, including a Chairperson and Vice-Chairperson, who are elected by the tribal membership.</p>
        <p>Information about the tribal government can be found on the <a href='https://www.tontoapache.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Tonto Apache Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Tonto Apache Tribal Council enacts laws and ordinances that govern the reservation. For access to the official and most current versions of the tribal code, it is best to contact the tribal government offices directly, as a comprehensive online version is not publicly available.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Tonto Apache Tribe maintains its own judicial system to handle legal matters arising under its laws. For specific information about court services, procedures, and contact details, individuals should contact the tribal administration.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Tonto Apache Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws on the reservation, ensuring the safety of the community and visitors.</p>
        <p>Contact information for the police department is available on the <a href='https://www.tontoapache.org/police-department.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Tonto Apaches have inhabited the Tonto Basin and surrounding areas for centuries. After the Camp Verde Reservation was established and later dissolved, many Tonto Apaches were forced on a brutal winter march to the San Carlos Reservation. Over the years, many returned to their homeland around Payson. After a long struggle, the tribe achieved federal recognition in 1972.</p>
        <p>Today, the Tonto Apache Tribe is a significant economic contributor to the region, most notably through the operation of the Mazatzal Hotel & Casino. For more information, visit the <a href='https://www.tontoapache.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Tonto Apache Tribe website</a>.</p>
      `,
    },
  },
};
