import { v4 as uuidv4 } from 'uuid';
export const films= [
    { title: 'Inception', description:"Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.", rating: 4, image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg', year: 2010 ,  id:uuidv4() },
    { title: 'Shawshank redemption', description:"En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 20 ans. Commence alors une grande histoire d'amitié entre les deux hommes.", rating: 2, image: 'https://miro.medium.com/max/1120/1*jDPFk_nRQpNPqFHdTM9SJA.jpeg', year: 1994, id:uuidv4() },
    { title: 'Blade Runner',description:"Dans les dernières années du 20e siècle, des milliers d'hommes et de femmes partent à la conquête de l'espace, fuyant les mégalopoles devenues insalubres. Sur les colonies, une nouvelle race d'esclaves voit le jour : les répliquants, des androïdes que rien ne peut distinguer de l'être humain. Cependant, suite à une révolte, ces derniers sont peu à peu retirés.", rating: 3, image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png', year: 2017, id:uuidv4() },
    { title: 'Da Vinci Code',description:"Une nuit, le professeur Robert Langdon, éminent spécialiste de l'étude des symboles, est appelé d'urgence au Louvre : le conservateur du musée a été assassiné, mais avant de mourir, il a laissé de mystérieux symboles... Avec l'aide de la cryptologue Sophie Neveu, Langdon va mener l'enquête et découvrir des signes dissimulés dans les oeuvres de Léonard de Vinci.", rating: 5, image: 'https://fr.web.img6.acsta.net/medias/nmedia/18/36/20/56/18613332.jpg', year: 2000,id:uuidv4() }
];