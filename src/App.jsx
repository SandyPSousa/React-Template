import './App.css'

export default function App() {
    const openPage = (page) => {
        window.open(`src/TP1/${page}/index.html`, '_blank');
    };

    return (
        <main>
            <button onClick={() => openPage('01')}>TP 1.1</button>
            <button onClick={() => openPage('02')}>TP 1.2</button>
            <button onClick={() => openPage('03')}>TP 1.3</button>
            <button onClick={() => openPage('04')}>TP 1.4</button>
            <button onClick={() => openPage('05')}>TP 1.5</button>
            <button onClick={() => openPage('06')}>TP 1.6</button>
            <button onClick={() => openPage('07')}>TP 1.7</button>
            <button onClick={() => openPage('08')}>TP 1.8</button>
            <button onClick={() => openPage('09')}>TP 1.9</button>
            <button onClick={() => openPage('10')}>TP 1.10</button>
            <button onClick={() => openPage('11')}>TP 1.11</button>
            <button onClick={() => openPage('12')}>TP 1.12</button>
            <button onClick={() => openPage('13')}>TP 1.13</button>
            <button onClick={() => openPage('14')}>TP 1.14</button>
            <button onClick={() => openPage('15')}>TP 1.15</button>
            <button onClick={() => openPage('16')}>TP 1.16</button>
        </main>
    );
}
