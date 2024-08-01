import BaseRepository from "../BaseRepository";
import { AdvertisementType } from "@/types/sharedTypes";
const resource = "/advertisement";

const advertisementRepository = {
  createAdvertisement(body: AdvertisementType) {
    return BaseRepository.post(`${resource}`, body);
  },
  getAllAdvertisement() {
    return BaseRepository.get(`${resource}`);
  },
  getAdvertisement(id: string) {
    return BaseRepository.get(`${resource}?id:${id}`);
  },
};
export default advertisementRepository;
