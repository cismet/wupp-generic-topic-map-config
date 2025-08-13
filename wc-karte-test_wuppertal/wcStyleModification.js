function styleManipulation(markerSymbolSize, style) {
    const scale = markerSymbolSize / 35 * 1.35;
    const newStyle = JSON.parse(JSON.stringify(style)); // Deep clone

    // toiletten-selection icon-size
    const selection = newStyle.layers.find(
        (l) => l.id === "toiletten-selection"
    );
    if (selection) {
        selection.layout["icon-size"].stops[0][1] *= scale;
        selection.layout["icon-size"].stops[1][1] *= scale;
    }

    // toiletten-poi-images icon-size
    const images = newStyle.layers.find(
        (l) => l.id === "toiletten-poi-images"
    );
    if (images) {
        images.layout["icon-size"].stops[0][1] *= scale;
        images.layout["icon-size"].stops[1][1] *= scale;
    }

    // toiletten-poi-labels text-size and text-offset
    const labels = newStyle.layers.find(
        (l) => l.id === "toiletten-poi-labels"
    );
    if (labels) {
        labels.layout["text-size"] *= scale;
        labels.layout["text-offset"].stops[0][1][1] *= scale;
        labels.layout["text-offset"].stops[1][1][1] *= scale;
    }

    return newStyle;
}
