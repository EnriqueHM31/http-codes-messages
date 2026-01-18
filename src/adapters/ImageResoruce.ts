import type { HttpImage } from '../types';

export function getImageResource(images: HttpImage[]) {

    const coverImage = images?.[0]?.imageCover;
    const coverImageAlt = images?.[0]?.alt;
    const characterImage = images?.[1]?.imageCharacter;
    const characterImageAlt = images?.[1]?.alt;

    return {
        coverImage, coverImageAlt, characterImage, characterImageAlt
    };
}