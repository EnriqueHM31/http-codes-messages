function getQuery() {
    return new URLSearchParams(window.location.search).get('q') ?? '';
}

function setQuery(value: string) {
    const url = new URL(window.location.href);

    if (value) {
        url.searchParams.set('q', value);
    } else {
        url.searchParams.delete('q');
    }

    history.replaceState({}, '', url);
}

let searchInitialized = false;

export function initSearch({
    input,
    noResults,
}: {
    input: HTMLInputElement;
    noResults: HTMLElement;
}) {
    if (searchInitialized) return;
    searchInitialized = true;

    // 🔹 1. Inicializa desde la URL
    input.value = getQuery();
    applyFilter(input.value);

    // 🔹 2. Escucha cambios del input
    input.addEventListener('input', () => {
        const value = input.value.trim().toLowerCase();
        setQuery(value);
        applyFilter(value);
    });

    function applyFilter(value: string) {
        let visible = 0;

        document.querySelectorAll('.http-card').forEach(card => {
            const el = card as HTMLDivElement;
            const code = el.dataset.code ?? '';
            const status = el.dataset.status ?? '';

            const match =
                !value ||
                code.includes(value) ||
                status.toLowerCase().includes(value);

            el.classList.toggle('hidden', !match);
            if (match) visible++;
        });

        noResults.classList.toggle('hidden', visible !== 0);
    }
}
