import { Component, OnInit } from "@angular/core"
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"
import { Socket } from "ngx-socket-io"
import { Team } from "../models/team.model"
import { Leaderboard } from "../models/leaderboard.model"

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    teamName!: string
    state!: string
    teams: Team[] = []

    leaderboards: Leaderboard[] = [
        {
            titre: "S03E03 - Spécial Impro (Rediffusion)",
            teams: [
                { rang: 1, nom: "Nofred", score: 51 },
                { rang: 2, nom: "Equipe Rocco", score: 46 },
                { rang: 2, nom: "Les 4 doigts de la main", score: 45 },
                { rang: 4, nom: "Les nuls", score: 43 },
                { rang: 5, nom: "Les beguines", score: 41 },
                { rang: 6, nom: "Pain au Chocolatine", score: 38 },
                { rang: 7, nom: "Les éperdues", score: 35 },
            ],
        },
        {
            titre: "S03E03 - Spécial Impro",
            teams: [
                { rang: 1, nom: "Impropropropkmoi", score: 41 },
                { rang: 2, nom: "Les Top à Lunettes", score: 40 },
                { rang: 2, nom: "Les kakapouets", score: 40 },
                { rang: 4, nom: "Las patatas bravas", score: 38 },
                { rang: 5, nom: "Le Nom 3 d'Équipe", score: 37 },
                { rang: 6, nom: "Gravy", score: 31 },
                { rang: 7, nom: "3 Girls 1 Cup", score: 28 },
                { rang: 8, nom: "C'est nous!", score: 25 },
                { rang: 9, nom: "Pompom... Pompom... Pompompompompompompom", score: 23 },
            ],
        },
        {
            titre: "S03E02 - Spécial Kaamelott (Rediffusion)",
            teams: [
                { rang: 1, nom: "Nom de l'équipe", score: 70 },
                { rang: 2, nom: "Les chevaliers du buffet à vaisselle", score: 67 },
                { rang: 3, nom: "Les fils d'unijambistes", score: 66 },
                { rang: 4, nom: "Les petits pédestres", score: 63 },
                { rang: 5, nom: "Les poules du Centre Sud - 1", score: 43 },
            ],
        },
        {
            titre: "S03E02 - Spécial Kaamelott",
            teams: [
                { rang: 1, nom: "Les petits pédestres", score: 73 },
                { rang: 2, nom: "Last and very much least", score: 65 },
                { rang: 3, nom: "Les cons qui st'adorent", score: 62 },
                { rang: 4, nom: "Les gros faisans dont une à la dinde", score: 60 },
                { rang: 5, nom: "Les fleurs en bouquet fanent", score: 59 },
                { rang: 6, nom: "Les culs de chouette", score: 57 },
                { rang: 7, nom: "Pays de Galle indépendant!", score: 56 },
                { rang: 7, nom: "Le caca des pigeons c'est caca", score: 56 },
                { rang: 9, nom: "Pain au chocolatine", score: 49 },
                { rang: 10, nom: "Quolifichet", score: 42 },
                { rang: 11, nom: "Les semi-croustillants", score: 40 },
            ],
        },
        {
            titre: "S03E01 - Juste pour vos oreilles (Rediffusion)",
            teams: [
                { rang: 1, nom: "Chépa", score: 66 },
                { rang: 2, nom: "Martine à la plage", score: 64 },
                { rang: 3, nom: "Les Pascal au bistro", score: 61 },
                { rang: 4, nom: "Clo-eh", score: 60 },
                { rang: 5, nom: "LOREM IPSUM", score: 59 },
                { rang: 5, nom: "Les Janine's", score: 59 },
            ],
        },
        {
            titre: "S03E01 - Juste pour vos oreilles",
            teams: [
                { rang: 1, nom: "Last and very much least", score: 60 },
                { rang: 2, nom: "Nom de l'équipe", score: 58 },
                { rang: 2, nom: "Les lobe-sters", score: 58 },
                { rang: 4, nom: "La tribu de Vincent", score: 57 },
                { rang: 4, nom: "Les concombres de mer", score: 57 },
                { rang: 4, nom: "Sympatouchs", score: 57 },
                { rang: 7, nom: "La fièvre du mercredi soir", score: 56 },
                { rang: 7, nom: "Le haut du Florent Pagny", score: 56 },
                { rang: 9, nom: "Pain au Chocolatine", score: 54 },
                { rang: 10, nom: "Dingdengue", score: 53 },
                { rang: 11, nom: "Les 2 dennavent", score: 51 },
                { rang: 12, nom: "Les pétillants", score: 48 },
            ],
        },
        {
            titre: "S02E04 (Rediffusion)",
            teams: [
                { rang: 1, nom: "Les Barakis", score: 64 },
                { rang: 1, nom: "Les Brestois", score: 64 },
                { rang: 1, nom: "Les croquants", score: 64 },
                { rang: 4, nom: "Les Maximes", score: 63 },
                { rang: 5, nom: "Sky is the limit", score: 62 },
                { rang: 6, nom: "Jean-Pierre", score: 60 },
                { rang: 7, nom: "CerealKillers", score: 59 },
                { rang: 8, nom: "Les inconnus", score: 55 },
            ],
        },
        {
            titre: "S02E04",
            teams: [
                { rang: 1, nom: "Le Nom 2 l'Équipe", score: 66 },
                { rang: 2, nom: "A.b.c et donc d.", score: 65 },
                { rang: 2, nom: "Les canneverges", score: 65 },
                { rang: 4, nom: "Pas de thème, pas de nom de team", score: 64 },
                { rang: 5, nom: "Lesmoumebons", score: 63 },
                { rang: 6, nom: "Noix de coucouille", score: 60 },
                { rang: 7, nom: "Popoyo", score: 59 },
                { rang: 8, nom: "Martine à la plage", score: 58 },
                { rang: 9, nom: "Les jalapeños", score: 53 },
                { rang: 10, nom: "John et ses drôles de dames", score: 52 },
            ],
        },
        {
            titre: "S02E03 - Spécial Disney (Réseautage)",
            teams: [
                { rang: 1, nom: "Tiagoteam", score: 71 },
                { rang: 2, nom: "Les Gauloisesn", score: 63 },
                { rang: 3, nom: "Disneyland Paris", score: 62 },
                { rang: 4, nom: "Hakuna Matata", score: 56 },
                { rang: 4, nom: "Les Chapeliers Fou", score: 56 },
                { rang: 4, nom: "Les inconnus", score: 56 },
                { rang: 4, nom: "Peine et Panique", score: 56 },
                { rang: 8, nom: "Lilo et les Bitches", score: 55 },
                { rang: 9, nom: "Winnie bourbon", score: 53 },
                { rang: 10, nom: "Les léopards fleuris", score: 52 },
                { rang: 11, nom: "MC", score: 51 },
            ],
        },
        {
            titre: "S02E03 - Spécial Disney (Rediffusion)",
            teams: [
                { rang: 1, nom: "Pinocchu", score: 62 },
                { rang: 2, nom: "Des Mandales ou Rien", score: 61 },
                { rang: 2, nom: "Sky is the Limit", score: 61 },
                { rang: 4, nom: "Nom de l'équipe", score: 55 },
                { rang: 5, nom: "Hakuna Meta", score: 52 },
                { rang: 5, nom: "Vétéran CRL", score: 52 },
                { rang: 7, nom: "Les aristochats", score: 51 },
                { rang: 7, nom: "Qui Pro Quo", score: 51 },
                { rang: 9, nom: "Les Torch Bears", score: 48 },
            ],
        },
        {
            titre: "S02E03 - Spécial Disney",
            teams: [
                { rang: 1, nom: "Le LAB", score: 57 },
                { rang: 2, nom: "Les Croquants Bouches", score: 52 },
                { rang: 3, nom: "Tanguy's Angels", score: 51 },
                { rang: 3, nom: "Les bébés Yoda", score: 51 },
                { rang: 5, nom: "Les deux font la paire", score: 50 },
                { rang: 5, nom: "Gérard, Bernard et Bianca", score: 55 },
                { rang: 7, nom: "Pain au chocolatine", score: 49 },
                { rang: 8, nom: "Walt The Fuck", score: 48 },
                { rang: 9, nom: "Les Chewies", score: 44 },
                { rang: 10, nom: "Les Ratatatouilles", score: 42 },
            ],
        },
        {
            titre: "S02E02 - Spécial Cérémonie des Oscars (Rediffusion)",
            teams: [
                { rang: 1, nom: "Les serial quizzer", score: 54 },
                { rang: 2, nom: "Les fauxmages en grain", score: 51 },
                { rang: 3, nom: "Les Prix Nobels", score: 37 },
                { rang: 4, nom: "Les jeudis Roberto", score: 34 },
            ],
        },
        {
            titre: "S02E02 - Spécial Cérémonie des Oscars",
            teams: [
                { rang: 1, nom: "Pain au chocolatine", score: 51 },
                { rang: 2, nom: "Le commandant des batardes", score: 50 },
                { rang: 2, nom: "Les rapides et dangereux 4", score: 50 },
                { rang: 4, nom: "Danse Lassive", score: 48 },
                { rang: 4, nom: "Le LAB", score: 48 },
                { rang: 6, nom: "Nom de l'équipe", score: 46 },
                { rang: 6, nom: "Papy fait de la résistance", score: 46 },
                { rang: 6, nom: "Wild", score: 46 },
                { rang: 9, nom: "John", score: 45 },
                { rang: 9, nom: "Les Einsteins", score: 45 },
                { rang: 11, nom: "La bolée toulousaine", score: 44 },
                { rang: 11, nom: "Tanguy's Angels", score: 44 },
                { rang: 13, nom: "Sky is the limit", score: 43 },
                { rang: 14, nom: "Pegrilosos", score: 29 },
            ],
        },
        {
            titre: "S02E01 - Spécial Astérix et Obélix",
            teams: [
                { rang: 1, nom: "Nom de l'équipe", score: 65 },
                { rang: 2, nom: "Laurix et ses amix", score: 52 },
                { rang: 3, nom: "Equipe Rocco", score: 46 },
                { rang: 4, nom: "Les invaincus", score: 42 },
                { rang: 5, nom: "Cékoile-coduwifix", score: 40 },
                { rang: 6, nom: "Les Sangliers flamboyants", score: 39 },
                { rang: 7, nom: "Rizabolix", score: 37 },
                { rang: 8, nom: "Floyacéka", score: 37 },
                { rang: 9, nom: "Hibiscus", score: 33 },
                { rang: 10, nom: "M&M's", score: 33 },
                { rang: 11, nom: "C'est la fête à Célia", score: 31 },
                { rang: 12, nom: "John", score: 26 },
            ],
        },
        {
            titre: "S01E04 - Spécial Enquête Spéciale",
            teams: [
                { rang: 1, nom: "Les croustillants", score: 46 },
                { rang: 2, nom: "Usual suspects", score: 43.5 },
                { rang: 3, nom: "Les experts roses", score: 42.5 },
                { rang: 4, nom: "Les voyageurs", score: 39.5 },
                { rang: 5, nom: "Jour du Chabat", score: 39 },
                { rang: 6, nom: "Tâche de gras", score: 38.5 },
                { rang: 7, nom: "Les Patatulacci (agent de la paix avant tout)", score: 36 },
                { rang: 8, nom: "Team Cloé", score: 35.5 },
            ],
        },
        {
            titre: "S01E03 - Spécial Harry Potter (Rediffusion)",
            teams: [
                { rang: 1, nom: "Team Harry Poutine", score: 78 },
                { rang: 2, nom: "The three teachers", score: 70 },
                { rang: 3, nom: "Romain", score: 56 },
                { rang: 3, nom: "Pour ou contre Souffle ?", score: 56 },
                { rang: 5, nom: "Les POUFs d'Or", score: 51 },
                { rang: 6, nom: "Random Gryffondor Students n°4", score: 49 },
                { rang: 7, nom: "Estelle & Lucile", score: 39 },
                { rang: 8, nom: "On fait ce qu'on peut", score: 35 },
            ],
        },
        {
            titre: "S01E03 - Spécial Harry Potter",
            teams: [
                { rang: 1, nom: "Les anglophones", score: 83 },
                { rang: 2, nom: "Havada pas de bras", score: 70 },
                { rang: 3, nom: "Les hermionettes", score: 67 },
                { rang: 4, nom: "Les AFFREUX GRYFFONS", score: 57 },
                { rang: 5, nom: "Les Weasley presque pas roux (mais presque!)", score: 50.5 },
                { rang: 6, nom: "Les belles couettes", score: 46.5 },
                { rang: 7, nom: "Les Gris Condors", score: 17.5 },
            ],
        },
        {
            titre: "S01E02 - Spécial Alain Chabat (Rediffusion)",
            teams: [
                { rang: 1, nom: "Nom d'équipe", score: 72 },
                { rang: 2, nom: "Avec Laura", score: 70 },
                { rang: 3, nom: "Guigui's groupies", score: 68 },
                { rang: 4, nom: "Le grand collisionneur", score: 67 },
                { rang: 5, nom: "Les Affreux", score: 65 },
                { rang: 6, nom: "Les moutons en boite", score: 64 },
                { rang: 7, nom: "La team Hortons", score: 63.5 },
                { rang: 8, nom: "Il s'en phalus de peu", score: 63 },
            ],
        },
        {
            titre: "S01E02 - Spécial Alain Chabat",
            teams: [
                { rang: 1, nom: "Chabateam", score: 82 },
                { rang: 2, nom: "LES BOLOSSSSSS", score: 76 },
                { rang: 3, nom: "Srirecha", score: 71 },
                { rang: 4, nom: "Les Beautés", score: 70 },
                { rang: 5, nom: "Maiiiis Noooon...!", score: 67 },
                { rang: 6, nom: "BECHAMEL", score: 66.5 },
                { rang: 7, nom: "Les chocolatines", score: 53 },
                { rang: 8, nom: "Les nuls", score: 49 },
            ],
        },
        {
            titre: "S01E01 (Rediffusion)",
            teams: [
                { rang: 1, nom: "Les oreilles de crisse", score: 67 },
                { rang: 2, nom: "Samouraï", score: 59 },
                { rang: 3, nom: "L'équipe Rocco", score: 57 },
                { rang: 4, nom: "cool&#64;gmail.com", score: 56 },
                { rang: 5, nom: "Sauce brune", score: 50.5 },
                { rang: 6, nom: "Les Saucisses", score: 50 },
                { rang: 7, nom: "Les relishes de la mort", score: 46 },
                { rang: 8, nom: "THOMAS/ROMAIN/GAËTAN", score: 44 },
            ],
        },
        {
            titre: "S01E01",
            teams: [
                { rang: 1, nom: "Les affreux", score: 56.5 },
                { rang: 2, nom: "Les cookies masqués", score: 56 },
                { rang: 3, nom: "Poutine tartiflette", score: 54 },
                { rang: 4, nom: "Les 100/100 tord", score: 53.5 },
                { rang: 5, nom: "Mayo-Harissa", score: 53 },
                { rang: 6, nom: "Kas Kuy", score: 49 },
                { rang: 7, nom: "Les Ostis de Francis", score: 46 },
                { rang: 7, nom: "Les Cariocas", score: 46 },
            ],
        },
    ]

    constructor(private socket: Socket, private router: Router) {}

    ngOnInit(): void {
        this.state = this.router.url

        //Request teams refreshment
        this.socket.emit("refresh-teams")

        //Teams refreshment
        this.socket.on("send-teams", (data: any) => {
            this.teams = Object.keys(data).map((key) => data[key])
        })
    }

    onJoin(form: NgForm): void {
        if (form.value.teamName) {
            this.router.navigateByUrl("game/" + form.value.teamName)
        }
    }

    onFillTeam(teamName: string, logged: boolean): void {
        if (!logged) {
            this.router.navigateByUrl("game/" + teamName)
        }
    }
}
