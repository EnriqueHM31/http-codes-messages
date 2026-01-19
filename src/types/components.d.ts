import type { HttpCode, HttpExample } from ".";

export interface LayoutProps {
    title: string;
    descripcion: string;
}
export interface CardAnimadaProps {
    description: string;
    imageCover: string;
    imageCoverAlt: string;
    imageCharacter: string;
    imageCharacterAlt: string;
    image_logo: string;
    link: string;
    code: string;
}

export interface CodeBlockProps {
    title: string;
    content: string;
}

export interface SectionCardProps {
    title: string;
}

export interface TitleSectionProps {
    text: string;
    align?: 'left' | 'center' | 'right';
    color?: string;
    size?: string;
    delay?: string;
}

export interface InfoCardProps {
    title: string;
    value: string;
}


export interface PropsMetaDataCode {
    category: string;
    httpVersion: string;
    specification: string;
    relatedCodes: string[];
}

export interface SectionCardsProps {
    data: HttpCode[];
    URL_LOGO: string;
    PAGE_SIZE: number;
}

export interface PropsUseCasesCode {
    useCases: string[];
}

export interface PropsDescriptionCode {
    description: string;
}

export interface PropsExamplesCode {
    examples: HttpExample[];
}

export interface HeaderDetailsProps {
    cover: string;
    alt: string;
    code: string;
}

export interface PropsTechnicalNotesCode {
    technicalNotes: string;
}

export interface CodesHttpProps {
    data: HttpCode[];
}

export interface PropsRelatedCodes {
    relatedCodes: number[];
}

export interface HeaderFormatoProps {
    headerFormat: string;
}

export interface PropsDeltaFormat {
    deltaFormat: Record<string, string>;
}