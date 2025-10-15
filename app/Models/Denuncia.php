<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Denuncia extends Model
{
    protected $table = 'denuncia';
    protected $primaryKey = 'denuncia_id';
    protected $fillable = [
        'denuncia_id',
        'local',
        'descricao',
        'idade_exata_vitima',
        'idade_aproximada_vitima',
        'tipo_suspeita',
        'relacao_suspeito_vitima',
        'evidencia',
    ];

    public static function getEnumTipoSuspeita()
    {
        $sql = "SHOW COLUMNS
                FROM denuncia
                WHERE Field = 'tipo_suspeita'";

        $type = DB::select($sql);
        preg_match( "/^enum\(\'(.*)\'\)$/", (!empty($type) ? $type[0]->Type : ''), $matches);
        $enum = explode("','", ((!empty($matches[1])) ? $matches[1] : ''));
        return $enum;
    }

    public static function getEnumRelacaoSuspeitoVitima()
    {
        $sql = "SHOW COLUMNS
                FROM denuncia
                WHERE Field = 'relacao_suspeito_vitima'";

        $type = DB::select($sql);
        preg_match( "/^enum\(\'(.*)\'\)$/", (!empty($type) ? $type[0]->Type : ''), $matches);
        $enum = explode("','", ((!empty($matches[1])) ? $matches[1] : ''));
        return $enum;
    }

    public static function getEnumIdadeAproximadaVitima()
    {
        $sql = "SHOW COLUMNS
                FROM denuncia
                WHERE Field = 'idade_aproximada_vitima'";

        $type = DB::select($sql);
        preg_match( "/^enum\(\'(.*)\'\)$/", (!empty($type) ? $type[0]->Type : ''), $matches);
        $enum = explode("','", ((!empty($matches[1])) ? $matches[1] : ''));
        return $enum;
    }
}