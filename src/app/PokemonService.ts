import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient) { }

    getPokemon() {
        return this.http.get<any>('http://localhost:8080/poke')
            .toPromise()
            .then(res => <Pokemon[]>res.data.results)
            .then(data => { return data; });
    }

    // getCustomersMedium() {
    //     return this.http.get<any>('assets/customers-medium.json')
    //         .toPromise()
    //         .then(res => <Customer[]>res.data)
    //         .then(data => { return data; });
    // }

    // getCustomersLarge() {
    //     return this.http.get<any>('assets/customers-large.json')
    //         .toPromise()
    //         .then(res => <Customer[]>res.data)
    //         .then(data => { return data; });
    // }

    // getCustomersXLarge() {
    //     return this.http.get<any>('assets/customers-xlarge.json')
    //         .toPromise()
    //         .then(res => <Customer[]>res.data)
    //         .then(data => { return data; });
    // }

}
