export interface HttpCode {
    code: number;
    status: string;
    category: string;
    description: string;
    useCases: string[];
    examples: HttpExample[];
    httpVersion: string;
    specification: string;

    // Opcionales (no todos los códigos los tienen)
    relatedCodes?: number[];
    technicalNotes?: string;
    headerFormat?: string;
    relatedHeaders?: string[];
    deltaFormats?: Record<string, string>;
}

export interface HttpExample {
    scenario: string;
    request: string;
    response: string;
    explanation: string;
}
