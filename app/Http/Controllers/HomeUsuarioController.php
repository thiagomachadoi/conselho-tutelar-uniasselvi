<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Denuncia;

class HomeUsuarioController extends Controller
{
    public function index()
    {
        $enumTipoSuspeita = Denuncia::getEnumTipoSuspeita();
        $optionsTipoSuspeita = $this->makeOptionsForSelect($enumTipoSuspeita);

        $enumRelacaoSuspeitoVitima = Denuncia::getEnumRelacaoSuspeitoVitima();
        $optionsRelacaoSuspeitoVitima = $this->makeOptionsForSelect($enumRelacaoSuspeitoVitima);

        $enumIdadeAproximadaVitima = Denuncia::getEnumIdadeAproximadaVitima();
        $optionsIdadeAproximadaVitima = $this->makeOptionsForSelect($enumIdadeAproximadaVitima);

        $response = [
            'optionsTipoSuspeita' => $optionsTipoSuspeita,
            'optionsRelacaoSuspeitoVitima' => $optionsRelacaoSuspeitoVitima,
            'optionsIdadeAproximadaVitima' => $optionsIdadeAproximadaVitima,
        ];

        return Inertia::render('HomeUsuario/HomeUsuario', $response);
    }

    public function denunciar(Request $request)
    {
        $this->validateDadosDenunciar($request);

        $dados = $request->all();

        try {
            Denuncia::create($dados);
            return response()->json(['message' => 'Denúncia realizada com sucesso!'], 200);
        } catch (\Throwable $th) {
            Log::error('Erro ao salvar denúncia: ' . $th->getMessage());
            return response()->json(['message' => 'Ocorreu um erro ao realizar a ação!'], 500);
        }
    }

    private function validateDadosDenunciar(Request $request)
    {
        $rules = [
            'local' => ['required', 'string'],
            'descricao' => ['required', 'string'],
            'idade_exata_vitima' => ['nullable', 'numeric'],
            'idade_aproximada_vitima' => ['nullable', 'string'],
            'tipo_suspeita' => ['required', 'string'],
            'relacao_suspeito_vitima' => ['required', 'string'],
        ];

        $messages = [
            'local.required' => 'O campo local é obrigatório.',
            'descricao.required' => 'A descrição é obrigatória.',
            'tipo_suspeita.required' => 'O tipo de suspeita é obrigatório.',
            'relacao_suspeito_vitima.required' => 'A relação entre suspeito e vítima é obrigatória.',
        ];

        $validator = \Validator::make($request->all(), $rules, $messages);

        // Validação personalizada: apenas um dos dois campos pode estar preenchido
        $validator->after(function ($validator) use ($request) {
            $idadeExata = $request->input('idade_exata_vitima');
            $idadeAprox = $request->input('idade_aproximada_vitima');

            if (empty($idadeExata) && empty($idadeAprox)) {
                $validator->errors()->add('idade_exata_vitima', 'Informe a idade exata ou a idade aproximada da vítima.');
                $validator->errors()->add('idade_aproximada_vitima', 'Informe a idade exata ou a idade aproximada da vítima.');
            }

            if (!empty($idadeExata) && !empty($idadeAprox)) {
                $validator->errors()->add('idade_exata_vitima', 'Informe apenas um dos dois campos: idade exata ou aproximada.');
                $validator->errors()->add('idade_aproximada_vitima', 'Informe apenas um dos dois campos: idade exata ou aproximada.');
            }
        });

        $validator->validate();
    }

    private function makeOptionsForSelect($array)
    {
        $options = [];
        foreach ($array as $index) {
            $options[] = [
                "label" => $index,
                "value" => $index
            ];
        }

        return $options;
    }
}
