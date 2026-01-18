import type { HttpImage } from '../types';

export function getImageResource(images: HttpImage[]) {

    const coverImage = images?.[0]?.imageCover;
    const characterImage = images?.[1]?.imageCharacter;
    const coverImageAlt = images?.[0]?.alt;
    const characterImageAlt = images?.[1]?.alt;

    return {
        coverImage, coverImageAlt, characterImage, characterImageAlt
    };
}