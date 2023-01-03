

export function SharedLayout(children: React.ReactElement) {
    return (
        <>
            <div>
                A menu
            </div>
            <div>
                place holder for other pages
                {children}
            </div>
        </>
    );
}