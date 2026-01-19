function getQuery() {
    return new URLSearchParams(window.location.search).get('q')?.toLowerCase() ?? '';
}

function setQuery(value: string) {
    const url = new URL(window.location.href);

    console.log({ value });
    if (value) {
        url.searchParams.set('q', value);
    } else {
        url.searchParams.delete('q');
    }

    history.replaceState(null, '', url);
}

export function initSearch({
    input,
    noResults,
}: {
    input: HTMLInputElement;
    noResults: HTMLElement;
}) {
    // 🔹 1. Sync inicial desde la URL
    const initialValue = getQuery();
    input.value = initialValue;
    applyFilter(initialValue);

    // 🔹 2. Input → URL → Filter
    input.addEventListener('input', () => {
        const value = input.value.trim().toLowerCase();
        console.log({ value });
        setQuery(value);
        applyFilter(value);
    });

    // 🔹 3. URL → Input (back / forward / navigation)
    window.addEventListener('popstate', () => {
        const value = getQuery();
        input.value = value;
        applyFilter(value);
    });

    function applyFilter(value: string) {
        let visible = 0;

        const cards = document.querySelectorAll<HTMLDivElement>('.http-card');

        cards.forEach(el => {
            const code = el.dataset.code ?? '';
            const status = el.dataset.status?.toLowerCase() ?? '';

            const match =
                !value ||
                code.includes(value) ||
                status.includes(value);

            el.classList.toggle('hidden', !match);
            if (match) visible++;
        });

        noResults.classList.toggle('hidden', visible > 0);
    }
}
