import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Gemakkelijk te gebruiken',
        description: (
            <>
                Babbelaar is de eerste programmeertaal volledig in het Nederlands. Geen
                onnodige Engelse termen meer: in Babbelaar schrijf je geen "functions" maar "werkwijzen".
                <br></br>
                Het is niet alleen een taal, maar een nieuw perspectief op hoe programmeren lokaal en vertrouwd kan voelen.
            </>
        ),
    },
    {
        title: 'Een ode aan de Nederlandse taal',
        description: (
            <>
                Babbelaar maakt programmeren toegankelijker en duidelijker voor Nederlandstaligen.
                Het viert onze taal in een digitale wereld en doorbreekt taalbarrières in code.
            </>
        ),
    },
    {
        title: 'Nieuwe taal',
        description: (
            <>
                Babbelaar zit nog in een vroege ontwikkelingsfase. Het is een speeltuin voor experimenten,
                waar sommige functies nog in de steigers staan. Help mee en groei met ons mee.
            </>
        ),
    },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {/* <Svg className={styles.featureSvg} role="img" /> */}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
