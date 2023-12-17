import mongoose,{ Schema, model } from 'mongoose';

export interface ICarte {
    symbole: string;
    valeur: string;
}

export interface IDetailsPartie {
    tour: number;
    mise: number;
    cartes_joueur: ICarte[];
    cartes_croupier: ICarte[];
}

export interface IPartie {
    _id: string;
    id: number;
    nom_joueur: string;
    point: number;
    date_partie: Date;
    partie_gagnee: boolean;
    details_partie: IDetailsPartie[];
}

const CarteSchema = new Schema<ICarte>({
    symbole: { type: String, required: true },
    valeur: { type: String, required: true },
});

const DetailsPartieSchema = new Schema<IDetailsPartie>({
    tour: { type: Number, required: true },
    mise: { type: Number, required: true },
    cartes_joueur: [CarteSchema],
    cartes_croupier: [CarteSchema],
});

const PartieSchema = new Schema<IPartie>({
    id: { type: Number, required: true },
    nom_joueur: { type: String, required: true },
    point: { type: Number, required: true },
    date_partie: { type: Date, required: true },
    partie_gagnee: { type: Boolean, required: true },
    details_partie: [DetailsPartieSchema],
});

mongoose.pluralize(null);
export const Partie = model<IPartie>('Partie', PartieSchema, 'devwebFinalColl');
