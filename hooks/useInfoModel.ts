import {create} from 'zustand'
export interface ModalStoreInterface{
    movieId?:string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>();