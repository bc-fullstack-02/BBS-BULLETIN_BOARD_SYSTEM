import styles from './Home.module.css';

const Home = () => {
    return (
        <div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.titulo}>Introducao Ao Bulletin board System</h1>
                    <p className={styles.par2}>
                        Oque seria um bylletin board System?
                    </p>
                    <p className={styles.par3}>
                        Um bulletin board system (BBS) é um sistema de computador que permite a troca de mensagens entre usuários de um computador ou rede de computadores. Os BBSs são geralmente acessados por meio de um terminal de computador, mas também podem ser acessados por meio de um modem de telefone. Os BBSs são geralmente usados para troca de mensagens, mas também podem ser usados para jogos, compartilhamento de arquivos e outros fins.
                    </p>
                </div>
                <div className={styles.flap}></div>
            </div>
            

        </div>
            
        
    );
}
export default Home;