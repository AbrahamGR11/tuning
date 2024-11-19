document.addEventListener('DOMContentLoaded', () => {
    let isHighlighting = false;
    let startCell = null;

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mousedown', (e) => {
            isHighlighting = true;
            startCell = e.target;
            startCell.classList.add('highlight');
        });

        cell.addEventListener('mouseover', (e) => {
            if (isHighlighting) {
                e.target.classList.add('highlight');
            }
        });

        cell.addEventListener('mouseup', () => {
            isHighlighting = false;
        });
    });
});
