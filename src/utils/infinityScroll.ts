import type { HttpCode } from '../types';

const PAGE_SIZE = 12;

export function initInfiniteScroll({
    data,
    grid,
    sentinel
}: {
    data: HttpCode[];
    grid: HTMLDivElement;
    sentinel: HTMLDivElement;
}) {
    let currentIndex = PAGE_SIZE;
    let observer: IntersectionObserver | null = null;

    const renderCard = (code: HttpCode) => {
        const card = document.createElement('div');
        card.className = 'http-card';
        card.dataset.code = String(code.code);
        card.dataset.status = code.status.toLowerCase();

        card.innerHTML = `
<a href="code/${code.code}">
	<article class="card">
		<div class="wrapper">
			<div class="title z-10 bg-sky-700">
				<h2 class="absolute top-4 right-8 z-30 text-2xl font-bold">
					${code.code}
				</h2>
			</div>
			<img
				src="${code.images?.[0]?.imageCover ?? ''}"
				alt="${code.images?.[0]?.alt ?? ''}"
				class="cover-image"
			/>
		</div>

		<img
			src="https://res.cloudinary.com/dovznesem/image/upload/v1768586804/404__2_-removebg-preview_cgkkr5.png"
			alt="Imagen que dice la palabra Code"
			class="logo"
		/>

		<div class="container-character relative h-30 w-60 overflow-hidden">
			<img
				src="${code.images?.[1]?.imageCharacter ?? ''}"
				alt="${code.images?.[1]?.alt ?? ''}"
				class="character"
			/>
		</div>
	</article>
</a>
		`;

        return card;
    };

    const loadMore = () => {
        const next = data.slice(currentIndex, currentIndex + PAGE_SIZE);
        next.forEach(code => grid.appendChild(renderCard(code)));
        currentIndex += PAGE_SIZE;

        if (currentIndex >= data.length) {
            observer?.disconnect();
            sentinel.remove();
        }
    };

    const initObserver = () => {
        observer?.disconnect();

        observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) loadMore();
        });

        observer.observe(sentinel);
    };

    initObserver();

    return {
        reset() {
            currentIndex = PAGE_SIZE;
            initObserver();
        },
        stop() {
            observer?.disconnect();
        }
    };
}
