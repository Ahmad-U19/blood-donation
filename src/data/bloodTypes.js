import imgA from '../assets/Images/images.png';
import imgANeg from '../assets/Images/a-.png';
import imgB from '../assets/Images/b+.png';
import imgBNeg from '../assets/Images/b-.jpg';
import imgAB from '../assets/Images/ab+.png';
import imgABNeg from '../assets/Images/ab-.jpg';
import imgO from '../assets/Images/O+.png';
import imgONeg from '../assets/Images/O-.png';

export const bloodTypes = [
    {
        id: 1,
        type: "A Positive (A+)",
        slug: "a-positive",
        image: imgA,
        description: "A+ is one of the most common blood types. It contains the A antigen and the Rh factor.",
        overview: "A Positive (A+) is a common blood type. People with this blood type can give blood to others with A+ or AB+ blood types.",
        compatibility: {
            receive: ["A+", "A-", "O+", "O-"],
            donate: ["A+", "AB+"]
        },
        importance: "A+ is a critical blood type because it is common and frequently needed for surgeries and trauma patients.",
        didYouKnow: "A+ is the second most common blood type in the world!"
    },
    {
        id: 2,
        type: "A Negative (A-)",
        slug: "a-negative",
        image: imgANeg,
        description: "A- is a rarer blood type. It contains Ag antigen but no Rh factor.",
        overview: "A Negative (A-) is a rare blood type. It can be used for any patient with A or AB blood type regardless of Rh factor.",
        compatibility: {
            receive: ["A-", "O-"],
            donate: ["A+", "A-", "AB+", "AB-"]
        },
        importance: "A- platelets are universal and can be given to anyone.",
        didYouKnow: "Only about 6% of the population has A- blood."
    },
    {
        id: 3,
        type: "B Positive (B+)",
        slug: "b-positive",
        image: imgB,
        description: "B+ is found in about 10% of people. It has B antigen and Rh factor.",
        overview: "B Positive (B+) is one of the eight main blood groups and is found in about 9% of the global population. People with B+ blood have B antigens on the surface of their red blood cells and the Rh(D) antigen, making them Rh positive.",
        compatibility: {
            receive: ["B+", "B-", "O+", "O-"],
            donate: ["B+", "AB+"]
        },
        importance: "Since B+ is a relatively common type, hospitals need a steady supply of it for patients with this blood group. B+ donors also play a crucial role in platelet and plasma donations used for cancer, trauma, and surgery patients.",
        didYouKnow: "People with B+ blood are often encouraged to donate regularly because their blood can help both B and AB positive patients. Every donation can save up to three lives!"
    },
    {
        id: 4,
        type: "B Negative (B-)",
        slug: "b-negative",
        image: imgBNeg,
        description: "B- is one of the rarest types. It has B antigen but no Rh factor.",
        overview: "B Negative (B-) is a rare blood type. It is valuable because it can be used for patients with B or AB blood types.",
        compatibility: {
            receive: ["B-", "O-"],
            donate: ["B+", "B-", "AB+", "AB-"]
        },
        importance: "B- is essential for emergency transfusions for patients with B or AB blood types when their specifc type is unavailable.",
        didYouKnow: "Less than 2% of the population has B- blood."
    },
    {
        id: 5,
        type: "AB Positive (AB+)",
        slug: "ab-positive",
        image: imgAB,
        description: "AB+ is known as the \"universal plasma donor\" type.",
        overview: "AB Positive (AB+) patients are universal recipients for red blood cells.",
        compatibility: {
            receive: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            donate: ["AB+"]
        },
        importance: "AB+ plasma can be given to patients of any blood type.",
        didYouKnow: "AB+ is the universal recipient for red blood cells!"
    },
    {
        id: 6,
        type: "AB Negative (AB-)",
        slug: "ab-negative",
        image: imgABNeg,
        description: "AB- is the rarest blood type in the world.",
        overview: "AB Negative (AB-) is the rarest blood type. It contains A and B antigens but no Rh factor.",
        compatibility: {
            receive: ["AB-", "A-", "B-", "O-"],
            donate: ["AB+", "AB-"]
        },
        importance: "AB- plasma and platelets are often needed for patients with various conditions.",
        didYouKnow: "AB- is the rarest blood type, found in less than 1% of the population."
    },
    {
        id: 7,
        type: "O Positive (O+)",
        slug: "o-positive",
        image: imgO,
        description: "O+ is a common blood type and can donate to O+ and AB+.",
        overview: "O Positive (O+) is the most common blood type. It has no A or B antigens but has the Rh factor.",
        compatibility: {
            receive: ["O+", "O-"],
            donate: ["O+", "A+", "B+", "AB+"]
        },
        importance: "O+ red blood cells are frequently used in trauma situations when the patient's blood type is unknown (though O- is preferred, O+ is often used for males).",
        didYouKnow: "A approximately 38% of the population has O+ blood."
    },
    {
        id: 8,
        type: "O Negative (O-)",
        slug: "o-negative",
        image: imgONeg,
        description: "O- is the universal donor blood type.",
        overview: "O Negative (O-) is the universal donor for red blood cells. It has no A, B, or Rh antigens.",
        compatibility: {
            receive: ["O-"],
            donate: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
        },
        importance: "O- blood is used in emergencies when there is no time to check the patient's blood type.",
        didYouKnow: "O- is the universal red blood cell donor."
    }
];
