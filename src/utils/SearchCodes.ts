export function initSearch({
    input,
    noResults,
    onReset
}: {
    input: HTMLInputElement;
    noResults: HTMLElement;
    onReset: () => void;
}) {
    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        let visible = 0;

        document.querySelectorAll('.http-card').forEach(card => {
            const el = card as HTMLDivElement;
            const code = el.dataset.code ?? '';
            const status = el.dataset.status ?? '';

            const match =
                !value || code.includes(value) || status.includes(value);

            el.classList.toggle('hidden', !match);
            if (match) visible++;
        });

        if (!value) onReset();
        noResults.classList.toggle('hidden', visible > 0);
    });
}
