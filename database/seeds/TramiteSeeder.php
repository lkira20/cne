<?php

use Illuminate\Database\Seeder;
use App\Tramite;
class TramiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $tramite = new Tramite();
        $tramite->name = 'Nacimientos';
        $tramite->description = 'Documento con el que se valida el nacimiento en el territorio nacional que identifica al mismo como ciudadano de la republica bolivariana de venezuela.';
        $tramite->save();

        $tramite = new Tramite();
        $tramite->name = 'Matrimonio';
        $tramite->description = 'Documento con el que se valida la union de dos personas legalmente en el registro civil.';
        $tramite->save();

        $tramite = new Tramite();
        $tramite->name = 'Uniones establas de hecho';
        $tramite->description = 'es la cohabitación o vida en común, elemento que puede ser sustituido por la convivencia en visitas constantes, socorro mutuo, ayuda económica reiterada, vida social conjunta, e hijos, entre un hombre y una mujer, sin impedimentos para contraer matrimonio, tal unión será con carácter de permanencia (dos años mínimo), y que la pareja sea soltera, formada por divorciados o viudos entre sí o con solteros, sin que existan impedimentos dirimentes que impidan el matrimonio.';
        $tramite->save();

        $tramite = new Tramite();
        $tramite->name = 'defunciones';
        $tramite->description = 'documento con el que se valida la muerte de algun ciudadano, donde se mostraran todos los datos del ciudadano como el del suceso.';
        $tramite->save();

        $tramite = new Tramite();
        $tramite->name = 'Disolucion union estable de hecho por manifestacion unilateral';
        $tramite->description = 'En los casos de disolucion unilateral de las uniones estables de hecho, el registrador o la registradora civil, debera notificar a la otra persona unida de hecho, de conformidad con la ley.';
        $tramite->save();

        $tramite = new Tramite();
        $tramite->name = 'Disolucion union estable de hecho por manifestacion conjunta';
        $tramite->description = 'En los casos de disolucion unilateral de las uniones estables de hecho, el registrador o la registradora civil, debera notificar a la otra persona unida de hecho, de conformidad con la ley.';
        $tramite->save();

        $tramite = new Tramite();
        $tramite->name = 'Copias certificadas de nacimiento, matrimonio 0 defuncion';
        $tramite->description = 'copias de algunos de los documentos presentes que estan ahi';
        $tramite->save();
        /*

        $tramite = Tramite::create([
                                'name' => 'Nacimientos',
                                'description' => 'Documento con el que se valida el nacimiento en el territorio nacional que identifica al mismo como ciudadano de la republica bolivariana de venezuela.'
                                ]);

        $tramite = Tramite::create([
                                'name' => 'Matrimonio',
                                'description' => 'Documento con el que se valida la union de dos personas legalmente en el registro civil.'
                                ]);

        $tramite = Tramite::create([
                                'name' => 'Uniones establas de hecho',
                                'description' => ' es la cohabitación o vida en común, elemento que puede ser sustituido por la convivencia en visitas constantes, socorro mutuo, ayuda económica reiterada, vida social conjunta, e hijos, entre un hombre y una mujer, sin impedimentos para contraer matrimonio, tal unión será con carácter de permanencia (dos años mínimo), y que la pareja sea soltera, formada por divorciados o viudos entre sí o con solteros, sin que existan impedimentos dirimentes que impidan el matrimonio.'
                                ]);

        $tramite = Tramite::create([
                                'name' => 'defunciones',
                                'description' => 'documento con el que se valida la muerte de algun ciudadano, donde se mostraran todos los datos del ciudadano como el del suceso.'
                                ]);

        $tramite = Tramite::create([
                                'name' => 'Disolucion union estable de hecho por manifestacion unilateral',
                                'description' => 'En los casos de disolucion unilateral de las uniones estables de hecho, el registrador o la registradora civil, debera notificar a la otra persona unida de hecho, de conformidad con la ley.'
                                ]);

        $tramite = Tramite::create([
                                'name' => 'Disolucion union estable de hecho por manifestacion conjunta',
                                'description' => 'En los casos de disolucion unilateral de las uniones estables de hecho, el registrador o la registradora civil, debera notificar a la otra persona unida de hecho, de conformidad con la ley.'
                                ]);

        $tramite = Tramite::create([
                                'name' => 'Copias certificadas de nacimiento, matrimonio 0 defuncion', 'description' => 'copias de algunos de los documentos presentes que estan ahi']);
        */
    }
}