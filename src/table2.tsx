export default function Table2() {
    return(
        <>
            <p>
                This table shows the styles that fall under each category.
            </p>
            <table className="collapse">
                <caption>Ballroom Dance Styles</caption>
                <tr>
                    <th>Category</th>
                    <th>Style 1</th>
                    <th>Style 2</th>
                    <th>Style 3</th>
                    <th>Style 4</th>
                    <th>Style 5</th>
                </tr>
                <tr>
                    <th>Standard/Ballroom</th>
                    <th>Waltz</th>
                    <th>Tango</th>
                    <th>Foxtrot</th>
                    <th>Quickstep</th>
                    <th>Viennese Waltz</th>
                </tr>
                <tr>
                    <th>Smooth</th>
                    <th>Waltz</th>
                    <th>Tango</th>
                    <th>Foxtrot</th>
                    <th>Viennese Waltz</th>
                    <th>Peabody</th>
                </tr>
                <tr>
                    <th>Rhythm</th>
                    <th>Cha Cha</th>
                    <th>Rumba</th>
                    <th>Swing (East Coast)</th>
                    <th>Mambo</th>
                    <th>Bolero</th>
                </tr>
                <tr>
                    <th>Latin</th>
                    <th>Cha Cha</th>
                    <th>Rumba</th>
                    <th>Samba</th>
                    <th>Jive</th>
                    <th>Paso Doble</th>
                </tr>
                <tr>
                    <th>Nightclub Dance Styles</th>
                    <th>Salsa</th>
                    <th>Bachata</th>
                    <th>West Coast Swing</th>
                    <th>Hustle</th>
                </tr>
            </table>
            <hr/>
        </>
    );
}