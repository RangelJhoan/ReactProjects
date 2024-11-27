import { Sub, SubsResponseFromApi } from "../types";

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs)
}

const fetchSubs = (): Promise<SubsResponseFromApi> => {
    return fetch(
        "https://mocki.io/v1/aaf06623-646a-441b-968c-8fda03b12dfb"
    ).then((res) => res.json());
};

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
    return apiResponse.map((subResponse) => {
        const {
            nick,
            months: subMonths,
            profileUrl: avatar,
            description,
        } = subResponse;

        return {
            nick,
            subMonths,
            avatar,
            description,
        };
    });
};